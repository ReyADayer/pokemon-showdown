// ウオノラゴン

import {PokemonSet} from '../global-types';

export const dracovish = (): PokemonSet => {
	return {
		name: "Dracovish",
		species: "Dracovish",
		item: "Choice Band",
		ability: "Strong Jaw",
		moves: ['Fishious Rend', 'Dragon Rush', 'Rock Blast', 'Rest'],
		nature: 'Adamant',
		gender: '',
		evs: {hp: 76, atk: 236, def: 0, spa: 0, spd: 0, spe: 196},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50,
	}
};

export const dracovish2 = (): PokemonSet => {
	return {
		name: "Dracovish",
		species: "Dracovish",
		item: "Choice Scarf",
		ability: "Strong Jaw",
		moves: ['Fishious Rend', 'Outrage', 'Low kick', 'Sleep Talk'],
		nature: 'Adamant',
		gender: '',
		evs: {hp: 0, atk: 252, def: 4, spa: 0, spd: 0, spe: 252},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50,
	}
};
