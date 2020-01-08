// ヒヒダルマ

import {PokemonSet} from '../global-types';

export const darmanitan = (): PokemonSet => {
	return {
		name: "Darmanitan",
		species: "Darmanitan",
		item: "Choice Band",
		ability: "Gorilla Tactics",
		moves: ['Superpower','Icicle Crash','Flare Blitz', 'Earthquake'],
		nature: 'Jolly',
		gender: 'M',
		evs: {hp: 4, atk: 252, def: 0, spa: 0, spd: 0, spe: 252},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50
	}
};

export const darmanitan2 = (): PokemonSet => {
	return {
		name: "Darmanitan",
		species: "Darmanitan",
		item: "Choice Band",
		ability: "Gorilla Tactics",
		moves: ['Superpower','Icicle Crash','stoneedge', 'Earthquake'],
		nature: 'Jolly',
		gender: 'M',
		evs: {hp: 4, atk: 252, def: 0, spa: 0, spd: 0, spe: 252},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50
	}
};

export const darmanitan3 = (): PokemonSet => {
	return {
		name: "Darmanitan",
		species: "Darmanitan",
		item: "Choice Scarf",
		ability: "Gorilla Tactics",
		moves: ['Superpower','Ice Punch','Flare Blitz', 'U-turn'],
		nature: 'Jolly',
		gender: 'M',
		evs: {hp: 4, atk: 76, def: 4, spa: 0, spd: 172, spe: 252},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50
	}
};
