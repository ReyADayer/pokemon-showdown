import {Connection} from "mysql";

export async function getRandomPokemonId(conn: Connection, ignorePokemons: string[], ignoreItems: string[]): Promise<number> {
	const rows: any[] = await conn.query("SELECT * FROM pokemons WHERE species NOT IN (?) AND item NOT IN (?) AND disable = 0 ORDER BY RAND() LIMIT 1", [ignorePokemons, ignoreItems]);
	return rows[0].id;
}

export async function getTeamName(conn: Connection, teamId: number): Promise<string> {
	const teams: any[] = await conn.query("SELECT * FROM `teams` WHERE id = ?", teamId);
	return teams[0].name
}

export async function getPokemonIds(conn: Connection, teamId: number): Promise<number[]> {
	const rows: any[] = await conn.query("SELECT * FROM team_pokemons WHERE team_id = ?", teamId);
	let pokemonIds: number[] = [];
	rows.map(row => {
		pokemonIds.push(row.pokemon_id);
	});
	return pokemonIds;
}

export async function getPokemons(conn: Connection, pokemonIds: number[]): Promise<PokemonSet[]> {
	const result: PokemonSet[] = [];
	const pokemons: any[] = await conn.query("SELECT * FROM pokemons WHERE id IN (?)", [pokemonIds]);
	pokemons.map(pokemon => {
		const pokemonModel: PokemonSet = {
			name: pokemon.name,
			species: pokemon.species,
			item: pokemon.item,
			ability: pokemon.ability,
			moves: pokemon.moves.split(','),
			nature: pokemon.nature,
			gender: pokemon.gender,
			evs: JSON.parse(pokemon.evs),
			ivs: JSON.parse(pokemon.ivs),
			level: pokemon.level
		};
		result.push(pokemonModel);
	});
	return result;
}
