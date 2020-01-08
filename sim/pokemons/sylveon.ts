// ニンフィア

import {PokemonSet} from "../global-types";

export const sylveon = (): PokemonSet => {
	return {
		name: "Sylveon",
		species: "Sylveon",
		item: "Leftovers",
		ability: "Pixilate",
		moves: ['Yawn', 'Calm Mind', 'Hyper Voice', 'Mystical Fire'],
		nature: 'Bold',
		gender: '',
		evs: {hp: 180, atk: 0, def: 228, spa: 60, spd: 4, spe: 36},
		ivs: {hp: 31, atk: 0, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50,
	}
};
