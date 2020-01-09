// ニダンギル

import {PokemonSet} from '../global-types';

export const doublade = (): PokemonSet => {
	return {
		name: "Doublade",
		species: "Doublade",
		item: "Eviolite",
		ability: "No Guard",
		moves: ['Gyro Ball', 'Close Combat', 'Shadow Sneak', 'Sword Dance'],
		nature: 'Relaxed',
		gender: '',
		evs: {hp: 252, atk: 228, def: 36, spa: 4, spd: 0, spe: 252},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 0},
		level: 50,
	}
};
