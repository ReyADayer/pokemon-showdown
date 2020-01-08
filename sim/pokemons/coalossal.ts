// セキタンザン

import {PokemonSet} from '../global-types';

export const coalossal = (): PokemonSet => {
	return {
		name: "Coalossal",
		species: "Coalossal",
		item: "Figy Berry",
		ability: "Flash Fire",
		moves: ['Fire Spin', 'Rock Tomb', 'Will-O-Wisp', 'Stealth Rock'],
		nature: 'Sassy',
		gender: '',
		evs: {hp: 244, atk: 0, def: 28, spa: 0, spd: 236, spe: 0},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50,
	}
};
