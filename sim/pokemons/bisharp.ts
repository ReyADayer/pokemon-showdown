// キリキザン

import {PokemonSet} from '../global-types';

export const bisharp = (): PokemonSet => {
	return {
		name: "Bisharp",
		species: "Bisharp",
		item: "Focus Sash",
		ability: "Defiant",
		moves: ['Sucker Punch', 'Iron Head', 'Metal Burst', 'Guillotine'],
		nature: 'Adamant',
		gender: '',
		evs: {hp: 252, atk: 252, def: 4, spa: 0, spd: 0, spe: 0},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50,
	}
};
