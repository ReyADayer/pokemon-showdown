// ミロカロス

import {PokemonSet} from '../global-types';

export const milotic = (): PokemonSet => {
	return {
		name: "Milotic",
		species: "Milotic",
		item: "Flame Orb",
		ability: "Marvel Scale",
		moves: ['Scald', 'Haze', 'Mirror Coat', 'Recover'],
		nature: 'Bold',
		gender: '',
		evs: {hp: 244, atk: 0, def: 228, spa: 0, spd: 36, spe: 0},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50
	}
};
