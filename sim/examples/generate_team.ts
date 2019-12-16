import {generateRandomTeam} from "../pokemons/random_team";

async function team(): Promise<PokemonSet[]> {
	return generateRandomTeam();
}

const mysql = require('mysql');

// MySQLとのコネクションの作成
const conn = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	database: 'pokeai'
});

// 接続
conn.connect();

(async () => {
	for (let step = 0; step < 500; step++) {
		try {
			await team().then(team => {
				conn.query("INSERT INTO pokemon_set set ?", {
					team: JSON.stringify(team).toString(),
					rate: 1500
				}, function (error, results, fields) {
				});
			});
		}catch (e) {

		}
	}
})();
