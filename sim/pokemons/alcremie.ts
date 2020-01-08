// マホイップ

import {PokemonSet} from "../global-types";

export const alcremie = (): PokemonSet => {
	return {
		name: "Alcremie",
		species: "Alcremie",
		item: "Kee Berry",
		ability: "Aroma Veil",
		moves: ['Dazzling Gleam', 'Mystical Fire', 'Calm Mind', 'Recover'],
		nature: 'Modest',
		gender: '',
		evs: {hp: 244, atk: 0, def: 252, spa: 4, spd: 4, spe: 4},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50,
	}
};
