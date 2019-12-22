import * as Mysql from 'mysql';
import {physicalDragapult2} from "../pokemons/dragapult";
import {physicalExcadrill2} from "../pokemons/excadrill";
import {hozyoGrimmsnarl} from "../pokemons/grimmsnarl";
import {dmaxTogekiss} from "../pokemons/togekiss";
import {physicalSnorlax} from "../pokemons/snorlax";
import {physicalCloyster} from "../pokemons/cloyster";

function team(): PokemonSet[] {
	//return generateRandomTeam();
	return [physicalDragapult2(), physicalExcadrill2(), hozyoGrimmsnarl(), dmaxTogekiss(), physicalSnorlax(), physicalCloyster()]
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
		if (error) {
			conn.rollback(function() {
				throw error;
			});
		}
		const id = results.insertId;
		conn.query("INSERT INTO team_pokemons set ?", {team_id: teamId, pokemon_id: id})
	});
}

(async () => {
	conn.beginTransaction(function(err) {
		if (err) {
			throw err;
		}
		conn.query("INSERT INTO teams set ?", {
			name:'元世界3位のスタン',
			rate: 1500
		}, function (error, results, fields) {
			if (error) {
				//insertに失敗したら戻す
				conn.rollback(function() {
					throw err;
				});
			}
			const id = results.insertId;
			team().map(pokemonSet => {
				setPokemon(id, pokemonSet)
			});

			conn.commit(function(err) {
				if (err) {
					conn.rollback(function() {
						throw err;
					});
				}
				console.log('success!');
			});
		});

	});
})();
