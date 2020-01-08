// パッチラゴン

import {PokemonSet} from "../global-types";

export const dracozolt = (): PokemonSet => {
	return {
		name: "Dracozolt",
		species: "Dracozolt",
		item: "Life Orb",
		ability: "Hustle",
		moves: ['Bolt Beak', 'Outrage', 'Low Kick', 'Aerial Ace'],
		nature: 'Adamant',
		gender: '',
		evs: {hp: 0, atk: 252, def: 4, spa: 0, spd: 0, spe: 252},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50,
	}
};
