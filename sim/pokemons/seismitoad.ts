// ガマゲロゲ

import {PokemonSet} from '../global-types';

export const seismitoad = (): PokemonSet => {
	return {
		name: "Seismitoad",
		species: "Seismitoad",
		item: "Light Ball",
		ability: "Water Absorb",
		moves: ['Scald', 'Icy Wind', 'Fling', 'Stealth Rock'],
		nature: 'Calm',
		gender: '',
		evs: {hp: 212, atk: 0, def: 0, spa: 68, spd: 196, spe: 100},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50,
	}
};

export const seismitoad2 = (): PokemonSet => {
	return {
		name: "Seismitoad2",
		species: "Seismitoad",
		item: "Life Orb",
		ability: "Swift Swim",
		moves: ['Hydro Pump', 'Earth Power', 'Grass Knot', 'Sludge Wave'],
		nature: 'Modest',
		gender: '',
		evs: {hp: 4, atk: 0, def: 0, spa: 252, spd: 0, spe: 252},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50,
	}
};
