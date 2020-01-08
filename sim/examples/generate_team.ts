import * as Mysql from 'mysql';
import {dragapult3, dragapult4, dragapultScarf1, dragapultScarf2, dragapultScarf3} from "../pokemons/dragapult";
import {darmanitan2} from "../pokemons/darmanitan";
import {toxapex} from "../pokemons/toxapex";
import {quagsire} from "../pokemons/quagsire";
import {tyranitar, tyranitar2} from "../pokemons/tyranitar";
import {corviknight2, corviknight3, corviknight4} from "../pokemons/corviknight";
import {excadrill3} from "../pokemons/excadrill";
import {hydreigon3} from "../pokemons/hydreigon";
import {mimikyu3, mimikyu4, mimikyu5} from "../pokemons/mimikyu";
import {sylveon} from "../pokemons/sylveon";
import {typenull} from "../pokemons/typenull";
import {durant3} from "../pokemons/durant";
import {rotomCut, rotomWash2, rotomWash3} from "../pokemons/rotom";
import {hippowdon} from "../pokemons/hippowdon";
import {whimsicott2} from "../pokemons/whimsicott";
import {drednaw} from "../pokemons/drednaw";
import {cloyster3} from "../pokemons/cloyster";
import {snorlax2} from "../pokemons/snorlax";
import {cinderace, cinderace2} from "../pokemons/cinderace";
import {dracozolt} from "../pokemons/dracozolt";
import {alcremie} from "../pokemons/alcremie";
import {greedent} from "../pokemons/greedent";
import {umbreon} from "../pokemons/umbreon";

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
	// return [darmanitan(), gastrodon(), physicalCloyster2(), whimsicott(), mimikyuScarf(), rotomHeat2()]
	// AI01
	// return [sirfetchd(), hydreigon2(), durant2(), gengar(), reuniclus(), shiinotic1()];
	// http://uederno1.hatenablog.com/entry/2020/01/01/171441
	return [dragapultScarf1(), darmanitan2(), toxapex(), quagsire(), tyranitar(), corviknight2()];
	// http://einz.hatenablog.com/entry/2020/01/01/135314
	return [excadrill3(), dragapult3(), corviknight3(), hydreigon3(), mimikyu3(), sylveon()];
	// https://note.com/futurepop/n/nc7496dd64eaf
	return [typenull(), durant3(), dragapultScarf2(), rotomWash2(), mimikyu4(), hippowdon()];
	// http://mizuhamalphas.hatenablog.com/entry/2020/01/01/125404
	return [whimsicott2(), drednaw(), cloyster3(), snorlax2(), rotomCut(), cinderace()];
	// http://mobchara-eevee.hatenablog.com/entry/2020/01/01/132136
	return [dragapult4(), cinderace2(), dracozolt(), alcremie(), greedent(), corviknight4()];
	// http://blog.livedoor.jp/tama_poke/archives/1076576471.html
	return [tyranitar2(), corviknight4(), dragapultScarf3(), rotomWash3(), umbreon(), mimikyu5()];
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
			name: 'AI01',
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
