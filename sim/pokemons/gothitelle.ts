// ゴチルゼル

import {PokemonSet} from '../global-types';

export const gothitelle = (): PokemonSet => {
	return {
		name: "Gothitelle",
		species: "Gothitelle",
		item: "Chesto Berry",
		ability: "Shadow Tag",
		moves: ['Moonblast', 'Leech Seed', 'Substitute', 'Endeavor'],
		nature: 'Bold',
		gender: 'M',
		evs: {hp: 252, atk: 0, def: 196, spa: 4, spd: 28, spe: 28},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50
	}
};

