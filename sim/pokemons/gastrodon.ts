// トリトドン

import {PokemonSet} from '../global-types';

export const gastrodon = (): PokemonSet => {
	return {
		name: "Gastrodon",
		species: "Gastrodon",
		item: "Sitrus Berry",
		ability: "Storm Drain",
		moves: ['Scald', 'Earth Power', 'Yawn', 'Recover'],
		nature: 'Bold',
		gender: '',
		evs: {hp: 252, atk: 0, def: 252, spa: 4, spd: 0, spe: 0},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50
	}
};
