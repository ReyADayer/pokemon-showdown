// エースバーン

import {PokemonSet} from "../global-types";

export const cinderace = (): PokemonSet => {
	return {
		name: "Cinderace",
		species: "Cinderace",
		item: "Life Orb",
		ability: "Blaze",
		moves: ['Pyro Ball', 'High Jump Kick', 'Iron Head', 'Sucker Punch'],
		nature: 'Jolly',
		gender: '',
		evs: {hp: 4, atk: 252, def: 0, spa: 0, spd: 0, spe: 252},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50,
	}
};

export const cinderace2 = (): PokemonSet => {
	return {
		name: "Cinderace",
		species: "Cinderace",
		item: "Choice Band",
		ability: "Blaze",
		moves: ['Pyro Ball', 'High Jump Kick', 'U-turn', 'Sucker Punch'],
		nature: 'Adamant',
		gender: '',
		evs: {hp: 0, atk: 252, def: 0, spa: 0, spd: 4, spe: 252},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50,
	}
};

export const cinderace3 = (): PokemonSet => {
	return {
		name: "Cinderace3",
		species: "Cinderace",
		item: "Expert Belt",
		ability: "Blaze",
		moves: ['Pyro Ball', 'High Jump Kick', 'Taunt', 'Sucker Punch'],
		nature: 'Jolly',
		gender: '',
		evs: {hp: 60, atk: 212, def: 4, spa: 0, spd: 52, spe: 180},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50,
	}
};
