import * as Mysql from 'mysql';
import {
	dragapult3,
	dragapult4,
	dragapult5,
	dragapult6,
	dragapult7,
	dragapultScarf1,
	dragapultScarf2,
	dragapultScarf3
} from "../pokemons/dragapult";
import {darmanitan2, darmanitan3} from "../pokemons/darmanitan";
import {toxapex, toxapex2} from "../pokemons/toxapex";
import {quagsire} from "../pokemons/quagsire";
import {tyranitar, tyranitar2} from "../pokemons/tyranitar";
import {
	corviknight2,
	corviknight3,
	corviknight4,
	corviknight5,
	corviknight6,
	corviknight7,
	corviknight8,
	corviknight9
} from "../pokemons/corviknight";
import {excadrill3, excadrill4, excadrill5} from "../pokemons/excadrill";
import {hydreigon3, hydreigon4, hydreigon5, hydreigon6, hydreigon7} from "../pokemons/hydreigon";
import {mimikyu, mimikyu3, mimikyu4, mimikyu5, mimikyu6, mimikyu7, mimikyu8} from "../pokemons/mimikyu";
import {sylveon} from "../pokemons/sylveon";
import {typenull} from "../pokemons/typenull";
import {durant3, durant4} from "../pokemons/durant";
import {rotomCut, rotomWash2, rotomWash3, rotomWash4} from "../pokemons/rotom";
import {hippowdon, hippowdon2, hippowdon3} from "../pokemons/hippowdon";
import {whimsicott2} from "../pokemons/whimsicott";
import {drednaw} from "../pokemons/drednaw";
import {cloyster3, cloyster4, cloyster5} from "../pokemons/cloyster";
import {snorlax2} from "../pokemons/snorlax";
import {cinderace, cinderace2, cinderace3} from "../pokemons/cinderace";
import {dracozolt} from "../pokemons/dracozolt";
import {alcremie} from "../pokemons/alcremie";
import {greedent} from "../pokemons/greedent";
import {umbreon, umbreon2} from "../pokemons/umbreon";
import {togekiss1} from "../pokemons/togekiss";
import {gastrodon2} from "../pokemons/gastrodon";
import {aegislash} from "../pokemons/aegislash";
import {gardevoir} from "../pokemons/gardevoir";
import {dracovish} from "../pokemons/dracovish";
import {grimmsnarl3, grimmsnarl4} from "../pokemons/grimmsnarl";
import {glalie2} from "../pokemons/glalie";
import {seismitoad, seismitoad2} from "../pokemons/seismitoad";
import {toxtricity} from "../pokemons/toxtricity";
import {diggersby} from "../pokemons/diggersby";
import {beartic} from "../pokemons/beartic";
import {coalossal} from "../pokemons/coalossal";
import {sirfetchd3} from "../pokemons/sirfetchd";
import {gyarados2} from "../pokemons/gyarados";

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
	return [tyranitar2(), corviknight5(), dragapultScarf3(), rotomWash3(), umbreon(), mimikyu5()];
	// https://www.asamipoke.com/entry/2020/01/01/172111
	return [darmanitan3(), corviknight6(), excadrill4(), togekiss1(), gastrodon2(), umbreon2()];
	// https://nicoyazawa.hatenablog.com/entry/2020/01/01/115108
	return [hippowdon2(), excadrill5(), hydreigon4(), aegislash(), mimikyu6(), cinderace2()];
	// http://nine-poke.hatenablog.com/entry/2020/01/01/234815
	return [gardevoir(), hydreigon5(), hippowdon3(), rotomWash4(), corviknight7(), mimikyu7()];
	// http://radian0202.hatenablog.com/entry/2020/01/02/082417
	return [dracovish(), corviknight8(), grimmsnarl3(), glalie2(), seismitoad(), toxtricity()];
	// https://pokesol.com/team/party4
	return [dragapult5(), mimikyu(), cloyster4(), diggersby(), hydreigon6(), cinderace3()];
	// http://barapoke.hatenablog.com/entry/2020/01/02/152921
	return [beartic(), seismitoad2(), coalossal(), dragapult6(), mimikyu7(), umbreon()];
	// http://yojyosyugi.hatenablog.com/entry/2020/01/02/185835
	return [sirfetchd3(), grimmsnarl4(), mimikyu8(), gyarados2(), cloyster5(), durant4()];
	// http://kuuri-yatume.hatenablog.com/entry/2020/01/02/214055
	return [umbreon(), dragapult7(), toxapex2(), hydreigon7(), coalossal(), corviknight9()];
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
