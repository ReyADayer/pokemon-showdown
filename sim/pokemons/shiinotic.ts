// マシェード

import {PokemonSet} from '../global-types';

export const shiinotic1 = (): PokemonSet => {
	return {
		name: "Shiinotic1",
		species: "Shiinotic",
		item: "Big Root",
		ability: "Effect Spore",
		moves: ["gigadrain", "leechseed", "substitute", "spore"],
		nature: 'Calm',
		gender: '',
		evs: {hp: 252, atk: 0, def: 4, spa: 0, spd: 252, spe: 0},
		ivs: {hp: 31, atk: 0, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50,
	}
};
