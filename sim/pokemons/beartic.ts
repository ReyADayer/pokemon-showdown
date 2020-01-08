// ツンベアー

import {PokemonSet} from "../global-types";

export const beartic = (): PokemonSet => {
	return {
		name: "Beartic",
		species: "Beartic",
		item: "Weakness Policy",
		ability: "Slush Rush",
		moves: ['Icicle Spear ', 'Heavy Slam', 'Dig', 'Swords Dance'],
		nature: 'Jolly',
		gender: '',
		evs: {hp: 52, atk: 204, def: 0, spa: 0, spd: 0, spe: 252},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50,
	}
};
