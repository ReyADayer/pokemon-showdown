import {PokemonSet} from '../global-types';

export const rotomWash = (): PokemonSet => {
	return {
		name: "Rotom",
		species: "Rotom-Wash",
		item: "Choice Specs",
		ability: "Levitate",
		moves: ['Discharge', 'Volt Switch', 'Trick', 'Hydro Pump'],
		nature: 'Modest',
		gender: '',
		evs: {hp: 252, atk: 0, def: 0, spa: 252, spd: 0, spe: 4},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50,
	}
};

export const rotomHeat = (): PokemonSet => {
	return {
		name: "Rotom",
		species: "Rotom-Heat",
		item: "Assault Vest",
		ability: "Levitate",
		moves: ['Discharge', 'Volt Switch', 'Dark Pulse', 'Overheat'],
		nature: 'Modest',
		gender: '',
		evs: {hp: 252, atk: 0, def: 0, spa: 252, spd: 0, spe: 4},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50,
	}
};

export const rotomHeat2 = (): PokemonSet => {
	return {
		name: "Rotom",
		species: "Rotom-Heat",
		item: "Assault Vest",
		ability: "Levitate",
		moves: ['Discharge', 'Volt Switch', 'Foul Play', 'Overheat'],
		nature: 'Modest',
		gender: '',
		evs: {hp: 252, atk: 0, def: 0, spa: 252, spd: 0, spe: 4},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50,
	}
};
