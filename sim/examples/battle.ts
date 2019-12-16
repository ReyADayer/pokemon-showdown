import {BattleStream, getPlayerStreams} from '../battle-stream';
import {Dex} from '../dex';
import {RandomPlayerAI} from '../tools/random-player-ai';

const mysql = require('mysql');

// MySQLとのコネクションの作成
const conn = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	database: 'pokeai'
});

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

for (let step = 0; step < 1000; step++) {
	conn.query("SELECT * FROM `pokemon_set` ORDER BY RAND() LIMIT 2;", function (error, results, fields) {
		const team1 = JSON.parse(results[0].team);
		const team2 = JSON.parse(results[1].team);

		const team1rate = results[0].rate;
		const team2rate = results[1].rate;

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

		return (async (): Promise<number> => {
			let chunk;
			// tslint:disable-next-line no-conditional-assignment
			while ((chunk = await streams.omniscient.read())) {
				console.log(chunk);
				if (chunk.includes('win')) {
					if (chunk.includes('Bot 1')) {
						conn.query("UPDATE pokemon_set set ? WHERE id = ?", [{
							rate: rate(team1rate, team2rate, true)
						}, results[0].id], function (error, results, fields) {
						});
						conn.query("UPDATE pokemon_set set ? WHERE id = ?", [{
							rate: rate(team2rate, team1rate, false)
						}, results[1].id], function (error, results, fields) {
						});
						return 1
					} else {
						conn.query("UPDATE pokemon_set set ? WHERE id = ?", [{
							rate: rate(team1rate, team2rate, false)
						}, results[0].id], function (error, results, fields) {
						});
						conn.query("UPDATE pokemon_set set ? WHERE id = ?", [{
							rate: rate(team2rate, team1rate, true)
						}, results[1].id], function (error, results, fields) {
						});
						return 2
					}
				}
			}
			return 0
		})();

	});
}
