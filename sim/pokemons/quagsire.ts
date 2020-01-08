// ヌオー

import {PokemonSet} from "../global-types";

export const quagsire = (): PokemonSet => {
	return {
		name: "Quagsire",
		species: "Quagsire",
		item: "Leftovers",
		ability: "Unaware",
		moves: ['Scald','Yawn','Protect', 'Recover'],
		nature: 'Bold',
		gender: 'M',
		evs: {hp: 252, atk: 0, def: 252, spa: 0, spd: 4, spe: 0},
		ivs: {hp: 31, atk: 0, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50
	}
};
