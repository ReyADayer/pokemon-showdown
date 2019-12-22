// オニゴーリ

import {PokemonSet} from '../global-types';

export const glalie = (): PokemonSet => {
	return {
		name: "Glalie",
		species: "Glalie",
		item: "Leftovers",
		ability: "Moody",
		moves: ['Freeze-Dry', 'Iron Head', 'Substitute', 'Protect'],
		nature: 'Timid',
		gender: '',
		evs: {hp: 188, atk: 0, def: 0, spa: 68, spd: 0, spe: 252},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50,
	}
};
