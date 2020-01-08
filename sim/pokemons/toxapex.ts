// ドヒドイデ

import {PokemonSet} from "../global-types";

export const toxapex = (): PokemonSet => {
	return {
		name: "toxapex",
		species: "toxapex",
		item: "Black Sludge",
		ability: "Regenerator",
		moves: ['Scald','Toxic','Baneful Bunker', 'Recover'],
		nature: 'Calm',
		gender: 'M',
		evs: {hp: 252, atk: 0, def: 124, spa: 0, spd: 132, spe: 0},
		ivs: {hp: 31, atk: 0, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50
	}
};
