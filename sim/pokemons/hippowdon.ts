// カバルドン

import {PokemonSet} from "../global-types";

export const hippowdon = (): PokemonSet => {
	return {
		name: "Hippowdon",
		species: "Hippowdon",
		item: "Sitrus Berry",
		ability: "Sand Stream",
		moves: ['Earthquake', 'Yawn', 'Whirlwind', 'Stealth Rock'],
		nature: 'Impish',
		gender: 'M',
		evs: {hp: 252, atk: 0, def: 108, spa: 0, spd: 148, spe: 0},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50,
		shiny: false,
		happiness: 0,
		pokeball: 'Master Ball',
	}
};
