import {PokemonSet} from '../global-types';

export const ditto = (): PokemonSet => {
	return {
		name: "ditto",
		species: "ditto",
		item: "Choice Scarf",
		ability: "Imposter",
		moves: ['Transform'],
		nature: 'Jolly',
		gender: 'M',
		evs: {hp: 252, atk: 0, def: 0, spa: 0, spd: 0, spe: 0},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50
	}
};

export const ditto2 = (): PokemonSet => {
	return {
		name: "ditto",
		species: "ditto",
		item: "Focus Sash",
		ability: "Imposter",
		moves: ['Transform'],
		nature: 'Jolly',
		gender: 'M',
		evs: {hp: 252, atk: 0, def: 0, spa: 0, spd: 0, spe: 0},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50
	}
};
