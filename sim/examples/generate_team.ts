import * as Mysql from 'mysql';
import {darmanitan} from "../pokemons/darmanitan";
import {gastrodon} from "../pokemons/gastrodon";
import {physicalCloyster2} from "../pokemons/cloyster";
import {whimsicott} from "../pokemons/whimsicott";
import {mimikyuScarf} from "../pokemons/mimikyu";
import {rotomHeat2} from "../pokemons/rotom";

function team(): PokemonSet[] {
	// モスギス式アイアントパーティ
	// return [grimmsnarl2(), physicalDurant(), hydreigon(), ditto(), physicalSnorlax(), mimikyu()];
	// 世界元3位考案のスタンダード構築
	// return [dragapult2(), excadrill2(), grimmsnarl(), dmaxTogekiss(), physicalSnorlax(), physicalCloyster()]
	// バイウールー軸トップ20ランカー
	//	return [dubwool(), physicalExcadrill(), gyarados(), mimikyu2(), rotomWash(), dmaxTogekiss2()];
	// サダイジャオニゴーリ構築
	// return [sandaconda(), glalie(), mimikyu2(), hydreigon(), corviknight(), rotomHeat()];
	// 世界2位
	return [darmanitan(), gastrodon(), physicalCloyster2(), whimsicott(), mimikyuScarf(), rotomHeat2()]
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
	const nature = pokemonSet.nature ? pokemonSet.nature : 'Serious';
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
			conn.rollback(function () {
				throw error;
			});
		}
		const id = results.insertId;
		conn.query("INSERT INTO team_pokemons set ?", {team_id: teamId, pokemon_id: id})
	});
}

(async () => {
	conn.beginTransaction(function (err) {
		if (err) {
			throw err;
		}
		conn.query("INSERT INTO teams set ?", {
			name: '世界2位',
			rate: 1500
		}, function (error, results, fields) {
			if (error) {
				//insertに失敗したら戻す
				conn.rollback(function () {
					throw err;
				});
			}
			const id = results.insertId;
			team().map(pokemonSet => {
				setPokemon(id, pokemonSet)
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
})();
