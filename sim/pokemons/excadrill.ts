import {PokemonSet} from '../global-types';

export const excadrill = (): PokemonSet => {
	return {
		name: "excadrill",
		species: "excadrill",
		item: "Focus Sash",
		ability: "Mold Breaker",
		moves: ['Earthquake', 'Iron Head', 'Rock Tomb', 'Horn Drill'],
		nature: 'Jolly',
		gender: 'M',
		evs: {hp: 4, atk: 252, def: 0, spa: 0, spd: 0, spe: 252},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50,
		shiny: false,
		happiness: 0,
		pokeball: 'Master Ball',
	}
};

export const excadrill2 = (): PokemonSet => {
	return {
		name: "excadrill",
		species: "excadrill",
		item: "Assault Vest",
		ability: "Mold Breaker",
		moves: ['Earthquake', 'Iron Head', 'Rock Tomb', 'Horn Drill'],
		nature: 'Jolly',
		gender: 'M',
		evs: {hp: 44, atk: 180, def: 4, spa: 0, spd: 28, spe: 252},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50,
		shiny: false,
		happiness: 0,
		pokeball: 'Master Ball',
	}
};

export const excadrill3 = (): PokemonSet => {
	return {
		name: "excadrill",
		species: "excadrill",
		item: "Focus Sash",
		ability: "Mold Breaker",
		moves: ['Earthquake', 'Iron Head', 'Rock Tomb', 'Stealth Rock'],
		nature: 'Jolly',
		gender: 'M',
		evs: {hp: 4, atk: 252, def: 0, spa: 0, spd: 0, spe: 252},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50,
		shiny: false,
		happiness: 0,
		pokeball: 'Master Ball',
	}
};
