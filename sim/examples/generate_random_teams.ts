import * as Mysql from 'mysql';
import {generateRandomTeam} from "../pokemons/random_team";

async function team(): Promise<PokemonSet[]> {
	return generateRandomTeam();
}

// MySQLとのコネクションの作成
const conn = Mysql.createConnection({
	host: 'localhost',
	user: 'root',
	database: 'pokeai_dev'
});

// 接続
conn.connect();

function setPokemon(teamId: number, pokemonSet: PokemonSet) {
	const nature = pokemonSet.nature ? pokemonSet.name : 'Serious';
	conn.query("INSERT INTO pokemons set ?", {
		name: pokemonSet.name,
		species: pokemonSet.species,
		item: pokemonSet.item,
		ability: pokemonSet.ability,
		moves: pokemonSet.moves.join(','),
		nature: nature,
		gender: pokemonSet.gender,
		evs: JSON.stringify(pokemonSet.evs).toString(),
		ivs: JSON.stringify(pokemonSet.ivs).toString(),
		level: pokemonSet.level,
	}, function (error, results, fields) {
		const id = results.insertId;
		conn.query("INSERT INTO team_pokemons set ?", {team_id: teamId, pokemon_id: id})
	});
}

(async () => {
	for (let step = 0; step < 100; step++) {
		try {
			await team().then(team => {
				conn.query("INSERT INTO teams set ?", {
					rate: 1500
				}, function (error, results, fields) {
					const id = results.insertId;
					team.map(pokemonSet => {
						setPokemon(id, pokemonSet)
					})
				});
			});
		} catch (e) {

		}
	}
})();
