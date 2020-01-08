// ギルガルド

import {PokemonSet} from '../global-types';

export const aegislash = (): PokemonSet => {
	return {
		name: "Aegislash",
		species: "Aegislash",
		item: "leftovers",
		ability: "Stance Change",
		moves: ['Shadow Ball', 'Shadow Sneak', 'Steel Beam', 'kingsshield'],
		nature: 'Quiet',
		gender: '',
		evs: {hp: 252, atk: 0, def: 4, spa: 252, spd: 0, spe: 0},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50,
	}
};
