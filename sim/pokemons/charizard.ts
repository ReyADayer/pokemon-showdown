// リザードン

import {PokemonSet} from "../global-types";

export const charizard = (): PokemonSet => {
	return {
		name: "Charizard",
		species: "Charizard",
		item: "Sharp Beak",
		ability: "Solar Power",
		moves: ['Fire Blast', 'Air Slash', 'Solar Beam', 'Work Up'],
		nature: 'Timid',
		gender: 'M',
		evs: {hp: 0, atk: 0, def: 4, spa: 252, spd: 0, spe: 252},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50,
		shiny: false,
		happiness: 0,
		pokeball: 'Master Ball',
	}
};
