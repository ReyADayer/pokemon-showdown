// ホルード

import {PokemonSet} from "../global-types";

export const diggersby = (): PokemonSet => {
	return {
		name: "Diggersby",
		species: "Diggersby",
		item: "Lum Berry",
		ability: "Huge Power",
		moves: ['Earthquake', 'Bounce', 'Thunder Punch', 'Swords Dance'],
		nature: 'Adamant',
		gender: '',
		evs: {hp: 116, atk: 252, def: 28, spa: 0, spd: 4, spe: 108},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50,
	}
};
