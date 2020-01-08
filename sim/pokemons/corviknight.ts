// アーマーガア

import {PokemonSet} from '../global-types';

export const corviknight = (): PokemonSet => {
	return {
		name: "Corviknight",
		species: "Corviknight",
		item: "Sitrus Berry",
		ability: "Mirror Armor",
		moves: ['Drill Peck', 'U-turn', 'Iron Defense', 'Roost'],
		nature: 'Impish',
		gender: '',
		evs: {hp: 252, atk: 0, def: 252, spa: 0, spd: 0, spe: 4},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50
	}
};

export const corviknight2 = (): PokemonSet => {
	return {
		name: "Corviknight",
		species: "Corviknight",
		item: "Sitrus Berry",
		ability: "Mirror Armor",
		moves: ['Brave Bird', 'U-turn', 'Tailwind', 'Roost'],
		nature: 'Relaxed',
		gender: '',
		evs: {hp: 252, atk: 0, def: 252, spa: 0, spd: 4, spe: 0},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50
	}
};

export const corviknight3 = (): PokemonSet => {
	return {
		name: "Corviknight",
		species: "Corviknight",
		item: "Lum Berry",
		ability: "Mirror Armor",
		moves: ['Brave Bird', 'Taunt', 'Bulk Up', 'Roost'],
		nature: 'Jolly',
		gender: '',
		evs: {hp: 0, atk: 252, def: 4, spa: 0, spd: 0, spe: 252},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50
	}
};

export const corviknight4 = (): PokemonSet => {
	return {
		name: "Corviknight",
		species: "Corviknight",
		item: "Rocky Helmet",
		ability: "Mirror Armor",
		moves: ['Drill Peck', 'Bulk Up', 'Taunt', 'Roost'],
		nature: 'Impish',
		gender: '',
		evs: {hp: 252, atk: 0, def: 252, spa: 0, spd: 0, spe: 4},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50
	}
};

export const corviknight3 = (): PokemonSet => {
	return {
		name: "Corviknight",
		species: "Corviknight",
		item: "Lum Berry",
		ability: "Mirror Armor",
		moves: ['Brave Bird', 'Taunt', 'Bulk Up', 'Roost'],
		nature: 'Jolly',
		gender: '',
		evs: {hp: 252, atk: 4, def: 0, spa: 0, spd: 0, spe: 252},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50
	}
};
