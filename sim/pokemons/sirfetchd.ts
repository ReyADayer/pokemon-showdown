// ネギガナイト

import {PokemonSet} from '../global-types';

export const sirfetchd = (): PokemonSet => {
	return {
		name: "Sirfetch'd",
		species: "Sirfetch'd",
		item: "Leek",
		ability: "Scrappy",
		moves: ['Close Combat', 'Brave Bird', 'Knock Off', 'Swords Dance'],
		nature: 'Adamant',
		gender: '',
		evs: {hp: 252, atk: 252, def: 0, spa: 0, spd: 0, spe: 4},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50,
	}
};

export const sirfetchd2 = (): PokemonSet => {
	return {
		name: "Sirfetch'd",
		species: "Sirfetch'd",
		item: "Leek",
		ability: "Scrappy",
		moves: ['Close Combat', 'Brave Bird', 'Knock Off', 'Swords Dance'],
		nature: 'Impish',
		gender: '',
		evs: {hp: 252, atk: 4, def: 252, spa: 0, spd: 0, spe: 0},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50,
	}
};
