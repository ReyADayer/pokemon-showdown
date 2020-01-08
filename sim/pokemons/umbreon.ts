// ブラッキー

import {PokemonSet} from '../global-types';

export const umbreon = (): PokemonSet => {
	return {
		name: "Umbreon",
		species: "Umbreon",
		item: "Leftovers",
		ability: "Inner Focus",
		moves: ['Wish', 'Protect', 'Foul Play', 'Yawn'],
		nature: 'Impish',
		gender: 'M',
		evs: {hp: 252, atk: 0, def: 252, spa: 0, spd: 0, spe: 4},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50
	}
};
