import * as Mysql from 'mysql';
import {getPokemonIds, getPokemons} from "./battle";

const util = require('util');

// MySQLとのコネクションの作成
const conn = Mysql.createConnection({
	host: 'localhost',
	user: 'root',
	database: 'pokeai_dev'
});

conn.query = util.promisify(conn.query);

async function getRandomPokemonId(ignorePokemons: string[], ignoreItems: string[]): Promise<number> {
	const rows: any[] = await conn.query("SELECT * FROM pokemons WHERE species NOT IN (?) AND item NOT IN (?) ORDER BY RAND() LIMIT 1", [ignorePokemons, ignoreItems]);
	return rows[0].id;
}

async function getTeamName(teamId: number): Promise<string> {
	const teams: any[] = await conn.query("SELECT * FROM `teams` WHERE id = ?", teamId);
	return teams[0].name
}


function getRandom5Ids(ids: number[]): number[] {
	for (var i = ids.length - 1; i > 0; i--) {
		var r = Math.floor(Math.random() * (i + 1));
		var tmp = ids[i];
		ids[i] = ids[r];
		ids[r] = tmp;
	}
	return ids;
}

async function execute(teamId: number, suffix: string) {
	const teamName = await getTeamName(teamId);
	const pokemonIds = await getPokemonIds(teamId);
	const newIds = getRandom5Ids(pokemonIds);

	const pokemonSet = await getPokemons(newIds);

	const ignorePokemons = pokemonSet.map(p => p.species);
	const ignoreItems = pokemonSet.map(p => p.item);

	const randomId = await getRandomPokemonId(ignorePokemons, ignoreItems)

	newIds.push(randomId);
	conn.beginTransaction(function (err) {
		if (err) {
			throw err;
		}
		conn.query("INSERT INTO teams set ?", {
			name: teamName + suffix,
			rate: 1500
		}, function (error, results, fields) {
			if (error) {
				//insertに失敗したら戻す
				conn.rollback(function () {
					throw err;
				});
			}
			const id = results.insertId;
			newIds.map(pokemonId => {
				conn.query("INSERT INTO team_pokemons set ?",
					{team_id: teamId, pokemon_id: pokemonId},
					function (err, results, fields) {
						if (err) {
							//insertに失敗したら戻す
							conn.rollback(function () {
								throw err;
							});
						}
					}
				)
			});

			conn.commit(function (err) {
				if (err) {
					conn.rollback(function () {
						throw err;
					});
				}
				console.log('success!');
			});
		});

	});
}


execute(1, 'gen1');
