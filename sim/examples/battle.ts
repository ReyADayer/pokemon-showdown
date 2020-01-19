import {BattleStream, getPlayerStreams} from '../battle-stream';
import {Dex} from '../dex';
import {RandomPlayerAI} from '../tools/random-player-ai';
import * as Mysql from 'mysql';
import {getPokemonIds, getPokemons} from "../db/query";

const util = require('util');

// MySQLとのコネクションの作成
const conn = Mysql.createConnection({
	host: 'localhost',
	user: 'root',
	database: 'pokeai_dev'
});

conn.query = util.promisify(conn.query);
const spec = {
	formatid: "gen8battlestadiumsingles",
};

const rate = (currentRate: number, opponentRate: number, win: boolean): number => {
	if (win) {
		return currentRate + (16 + (opponentRate - currentRate) * 0.04)
	} else {
		return currentRate - (16 + (currentRate - opponentRate) * 0.04)
	}
};

export async function getPokemonSet(teamId: number): Promise<PokemonSet[]> {
	let pokemonIds: number[] = await getPokemonIds(conn, teamId);
	const result: PokemonSet[] = await getPokemons(conn, pokemonIds);
	return result;
}

async function updateRate(team1id: number, team2id: number, team1rate: number, team2rate: number, win: boolean): Promise<number> {
	if (win) {
		await conn.query("UPDATE teams set ? WHERE id = ?", [{
			rate: rate(team1rate, team2rate, true)
		}, team1id]);
		await conn.query("UPDATE teams set ? WHERE id = ?", [{
			rate: rate(team2rate, team1rate, false)
		}, team2id]);
		return 1
	} else {
		await conn.query("UPDATE teams set ? WHERE id = ?", [{
			rate: rate(team1rate, team2rate, false)
		}, team1id]);
		await conn.query("UPDATE teams set ? WHERE id = ?", [{
			rate: rate(team2rate, team1rate, true)
		}, team2id]);
		return 2
	}
}


async function battle() {
	const teams: any[] = await conn.query("SELECT * FROM `teams` WHERE disable = 0 ORDER BY RAND() LIMIT 2;");

	const team1 = await getPokemonSet(teams[0].id);
	const team2 = await getPokemonSet(teams[1].id);

	const team1rate = teams[0].rate;
	const team2rate = teams[1].rate;

	const streams = getPlayerStreams(new BattleStream());

	const p1spec = {
		name: "Bot 1",
		team: Dex.packTeam(team1),
	};
	const p2spec = {
		name: "Bot 2",
		team: Dex.packTeam(team2),
	};

	const p1 = new RandomPlayerAI(streams.p1);
	const p2 = new RandomPlayerAI(streams.p2);

	streams.omniscient.write(`>start ${JSON.stringify(spec)}
>player p1 ${JSON.stringify(p1spec)}
>player p2 ${JSON.stringify(p2spec)}`);

	p1.start();
	p2.start();

	let log = '';
	(async () => {
		let chunk;
		// tslint:disable-next-line no-conditional-assignment
		while ((chunk = await streams.omniscient.read())) {
			log += chunk;
			if (chunk.includes('win')) {
				const result = chunk.includes('Bot 1');
				await conn.query("INSERT INTO battles set ?", {
					team1_id: teams[0].id,
					team2_id: teams[1].id,
					result: result ? 1 : 2,
					log: log
				});
				await updateRate(teams[0].id, teams[1].id, team1rate, team2rate, result);
			}
		}
	})();

	//  (async () => {
	// 	let chunk;
	// 	// tslint:disable-next-line no-conditional-assignment
	// 	let log = '';
	// 	while ((chunk = await streams.omniscient.read())) {
	// 		log += chunk;
	// 		console.log(chunk);
	// 		if (chunk.includes('turn')) {
	// 			console.log(log);
	// 			log = '';
	// 			console.log('-------k-------');
	// 		}
	//
	// 		if (chunk.includes('win')) {
	// 			updateRate(teams[0].id, teams[1].id, team1rate, team2rate, chunk.includes('Bot 1'));
	// 		}
	// 	}
	// });
}

async function execute(times: number) {
	for (let step = 0; step < times; step++) {
		await battle();
	}
}

execute(1000).then(a => {
		console.log('end')
	}
);
//conn.end();
