import * as Mysql from 'mysql';
import {
	dragapult10,
	dragapult11,
	dragapult12,
	dragapult13,
	dragapult14,
	dragapult3,
	dragapult4,
	dragapult5,
	dragapult6,
	dragapult7,
	dragapult8,
	dragapult9,
	dragapultScarf1,
	dragapultScarf2,
	dragapultScarf3
} from "../pokemons/dragapult";
import {darmanitan2, darmanitan3, darmanitan4, darmanitan5} from "../pokemons/darmanitan";
import {toxapex, toxapex2, toxapex3} from "../pokemons/toxapex";
import {quagsire} from "../pokemons/quagsire";
import {tyranitar, tyranitar2, tyranitar3, tyranitar4, tyranitar5} from "../pokemons/tyranitar";
import {
	corviknight10,
	corviknight11,
	corviknight12,
	corviknight2,
	corviknight3,
	corviknight4,
	corviknight5,
	corviknight6,
	corviknight7,
	corviknight8,
	corviknight9
} from "../pokemons/corviknight";
import {excadrill3, excadrill4, excadrill5, excadrill6, excadrill7} from "../pokemons/excadrill";
import {
	hydreigon3,
	hydreigon4,
	hydreigon5,
	hydreigon6,
	hydreigon7,
	hydreigon8,
	hydreigon9
} from "../pokemons/hydreigon";
import {
	mimikyu,
	mimikyu10,
	mimikyu11,
	mimikyu12,
	mimikyu2,
	mimikyu3,
	mimikyu4,
	mimikyu5,
	mimikyu6,
	mimikyu7,
	mimikyu8,
	mimikyu9
} from "../pokemons/mimikyu";
import {sylveon, sylveon2} from "../pokemons/sylveon";
import {typenull, typenull2, typenull3} from "../pokemons/typenull";
import {durant3, durant4, durant5, durant6} from "../pokemons/durant";
import {rotomCut, rotomCut2, rotomWash2, rotomWash3, rotomWash4, rotomWash5, rotomWash6} from "../pokemons/rotom";
import {hippowdon, hippowdon2, hippowdon3, hippowdon4} from "../pokemons/hippowdon";
import {whimsicott2, whimsicott3} from "../pokemons/whimsicott";
import {drednaw} from "../pokemons/drednaw";
import {cloyster3, cloyster4, cloyster5} from "../pokemons/cloyster";
import {snorlax2, snorlax3, snorlax4, snorlax5} from "../pokemons/snorlax";
import {cinderace, cinderace2, cinderace3} from "../pokemons/cinderace";
import {dracozolt, dracozolt2} from "../pokemons/dracozolt";
import {alcremie} from "../pokemons/alcremie";
import {greedent} from "../pokemons/greedent";
import {umbreon, umbreon2} from "../pokemons/umbreon";
import {dmaxTogekiss3, dmaxTogekiss4, dmaxTogekiss5, togekiss1} from "../pokemons/togekiss";
import {gastrodon2} from "../pokemons/gastrodon";
import {aegislash} from "../pokemons/aegislash";
import {gardevoir} from "../pokemons/gardevoir";
import {dracovish, dracovish2} from "../pokemons/dracovish";
import {grimmsnarl3, grimmsnarl4} from "../pokemons/grimmsnarl";
import {glalie2} from "../pokemons/glalie";
import {seismitoad, seismitoad2, seismitoad3} from "../pokemons/seismitoad";
import {toxtricity, toxtricity2} from "../pokemons/toxtricity";
import {diggersby} from "../pokemons/diggersby";
import {beartic} from "../pokemons/beartic";
import {coalossal} from "../pokemons/coalossal";
import {sirfetchd3} from "../pokemons/sirfetchd";
import {gyarados, gyarados2, gyarados3} from "../pokemons/gyarados";
import {charizard} from "../pokemons/charizard";
import {gothitelle} from "../pokemons/gothitelle";
import {hawlucha, hawlucha2} from "../pokemons/hawlucha";
import {milotic} from "../pokemons/milotic";
import {inteleon} from "../pokemons/inteleon";
import {duraludon} from "../pokemons/duraludon";
import {doublade} from "../pokemons/doublade";
import {bisharp} from "../pokemons/bisharp";

var teamName = '';

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
	// teamName = 'http://uederno1.hatenablog.com/entry/2020/01/01/171441';
	// return [dragapultScarf1(), darmanitan2(), toxapex(), quagsire(), tyranitar(), corviknight2()];
	// teamName = 'http://einz.hatenablog.com/entry/2020/01/01/135314';
	// return [excadrill3(), dragapult3(), corviknight3(), hydreigon3(), mimikyu3(), sylveon()];
	// teamName = 'https://note.com/futurepop/n/nc7496dd64eaf';
	// return [typenull(), durant3(), dragapultScarf2(), rotomWash2(), mimikyu4(), hippowdon()];
	// teamName = 'http://mizuhamalphas.hatenablog.com/entry/2020/01/01/125404';
	// return [whimsicott2(), drednaw(), cloyster3(), snorlax2(), rotomCut(), cinderace()];
	// teamName = 'http://mobchara-eevee.hatenablog.com/entry/2020/01/01/132136';
	// return [dragapult4(), cinderace2(), dracozolt(), alcremie(), greedent(), corviknight4()];
	// teamName = 'http://blog.livedoor.jp/tama_poke/archives/1076576471.html';
	// return [tyranitar2(), corviknight5(), dragapultScarf3(), rotomWash3(), umbreon(), mimikyu5()];
	// teamName = 'https://www.asamipoke.com/entry/2020/01/01/172111';
	// return [darmanitan3(), corviknight6(), excadrill4(), togekiss1(), gastrodon2(), umbreon2()];
	// teamName = 'https://nicoyazawa.hatenablog.com/entry/2020/01/01/115108';
	// return [hippowdon2(), excadrill5(), hydreigon4(), aegislash(), mimikyu6(), cinderace2()];
	// teamName = 'http://nine-poke.hatenablog.com/entry/2020/01/01/234815';
	// return [gardevoir(), hydreigon5(), hippowdon3(), rotomWash4(), corviknight7(), mimikyu7()];
	// teamName = 'http://radian0202.hatenablog.com/entry/2020/01/02/082417';
	// return [dracovish(), corviknight8(), grimmsnarl3(), glalie2(), seismitoad(), toxtricity()];
	// teamName = 'https://pokesol.com/team/party4';
	// return [dragapult5(), mimikyu(), cloyster4(), diggersby(), hydreigon6(), cinderace3()];
	// teamName = 'http://barapoke.hatenablog.com/entry/2020/01/02/152921';
	// return [beartic(), seismitoad2(), coalossal(), dragapult6(), mimikyu7(), umbreon()];
	// teamName = 'http://yojyosyugi.hatenablog.com/entry/2020/01/02/185835';
	// return [sirfetchd3(), grimmsnarl4(), mimikyu8(), gyarados2(), cloyster5(), durant4()];
	// teamName = 'http://kuuri-yatume.hatenablog.com/entry/2020/01/02/214055';
	// return [umbreon(), dragapult7(), toxapex2(), hydreigon7(), coalossal(), corviknight9()];
	// teamName = 'https://pokekare.info/null_ant/';
	// return [typenull2(), durant5(), hippowdon4(), charizard(), gyarados(), dragapult8()];
	// teamName = 'http://warbler-p.hatenablog.jp/entry/2020/01/01/225057';
	// return [whimsicott3(), gothitelle(), hawlucha(), mimikyu9(), hydreigon6(), milotic()];
	// teamName = 'http://irohapoke15.hatenablog.com/entry/2020/01/02/161628';
	// return [typenull3(), durant5(), dragapultScarf2(), rotomWash5(), sylveon2(), hawlucha2()];
	// teamName = 'http://toropoke.hatenablog.com/entry/2020/01/01/172212';
	// return [durant6(), mimikyu2(), hydreigon8(), rotomWash6(), darmanitan4(), dragapult9()];
	// teamName = 'http://harupokeart.blog.fc2.com/blog-entry-26.html';
	// return [tyranitar3(), excadrill6(), inteleon(), dragapult10(), rotomCut2(), mimikyu10()];
	// teamName = 'https://asahinapoke.hatenablog.com/entry/2020/01/02/111138';
	// return [dracozolt2(), toxapex3(), corviknight10(), dragapult11(), tyranitar4(), dmaxTogekiss3()];
	// teamName = 'http://p-poke.hatenablog.com/entry/2020/01/01/162819';
	// return [dragapult12(), mimikyu2(), hydreigon9(), snorlax3(), duraludon(), darmanitan5()];
	// teamName = 'http://xxcr7xx.hatenadiary.jp/entry/2020/01/01/162706';
	//return [mimikyu11()];
	// teamName = 'http://albapoke0818.hatenablog.com/entry/2020/01/01/234439';
	// return [tyranitar5(), dragapult13(), corviknight11(), snorlax4(), seismitoad3(), mimikyu12()];
	// teamName = 'http://nikonikopoke.hatenablog.com/entry/2020/01/02/012811';
	// return [dmaxTogekiss4(), doublade(), gyarados3(), snorlax5(), excadrill7(), dragapult14()];
	teamName = 'http://blog.livedoor.jp/mirai_minyato/archives/81876541.html';
	return [toxtricity2(), bisharp(), dmaxTogekiss5(), corviknight12(), mimikyu11(), dracovish2()];
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
		const createTeam = team();
		conn.query("INSERT INTO teams set ?", {
			name: teamName,
			rate: 1500
		}, function (error, results, fields) {
			if (error) {
				//insertに失敗したら戻す
				conn.rollback(function () {
					throw err;
				});
			}
			const id = results.insertId;
			createTeam.map(pokemonSet => {
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
