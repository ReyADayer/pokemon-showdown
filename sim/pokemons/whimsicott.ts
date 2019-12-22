// エルフーン

import {PokemonSet} from '../global-types';

export const whimsicott = (): PokemonSet => {
	return {
		name: "Whimsicott",
		species: "Whimsicott",
		item: "Leftovers",
		ability: "Prankster",
		moves: ['Moonblast', 'Leech Seed', 'Substitute', 'Endeavor'],
		nature: 'Timid',
		gender: 'M',
		evs: {hp: 252, atk: 0, def: 92, spa: 4, spd: 44, spe: 116},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50
	}
};
