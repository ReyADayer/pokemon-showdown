import {PokemonSet} from '../global-types';

export const gyarados = (): PokemonSet => {
	return {
		name: "gyarados",
		species: "gyarados",
		item: "Lum Berry",
		ability: "Intimidate",
		moves: ['Waterfall', 'Bounce', 'Dragon Dance', 'Taunt'],
		nature: 'Jolly',
		gender: '',
		evs: {hp: 4, atk: 252, def: 0, spa: 0, spd: 0, spe: 252},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50
	}
};

export const gyarados2 = (): PokemonSet => {
	return {
		name: "gyarados",
		species: "gyarados",
		item: "Lum Berry",
		ability: "Intimidate",
		moves: ['Waterfall', 'Bounce', 'Dragon Dance', 'Power Whip'],
		nature: 'Jolly',
		gender: '',
		evs: {hp: 4, atk: 252, def: 0, spa: 0, spd: 0, spe: 252},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50
	}
};

export const gyarados3 = (): PokemonSet => {
	return {
		name: "gyarados",
		species: "gyarados",
		item: "Life Orb",
		ability: "Intimidate",
		moves: ['Waterfall', 'Bounce', 'Dragon Dance', 'Power Whip'],
		nature: 'Adamant',
		gender: '',
		evs: {hp: 4, atk: 252, def: 0, spa: 0, spd: 0, spe: 252},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50
	}
};
