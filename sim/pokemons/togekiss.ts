import {PokemonSet} from '../global-types';

export const dmaxTogekiss = (): PokemonSet => {
	return {
		name: "togekiss",
		species: "togekiss",
		item: "Weakness Policy",
		ability: "Serene Grace",
		moves: ['Air Slash', 'Dazzling Gleam', 'Fire Blast', 'Nasty Plot'],
		nature: 'Timid',
		gender: '',
		evs: {hp: 252, atk: 0, def: 0, spa: 4, spd: 0, spe: 252},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50,
	}
};

export const dmaxTogekiss2 = (): PokemonSet => {
	return {
		name: "togekiss",
		species: "togekiss",
		item: "Weakness Policy",
		ability: "Serene Grace",
		moves: ['Air Slash', 'Dazzling Gleam', 'Flamethrower', 'Ancient Power'],
		nature: 'Modest',
		gender: '',
		evs: {hp: 4, atk: 0, def: 0, spa: 252, spd: 0, spe: 252},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50,
	}
};
