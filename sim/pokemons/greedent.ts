// ヨクバリス

import {PokemonSet} from "../global-types";

export const greedent = (): PokemonSet => {
	return {
		name: "Greedent",
		species: "Greedent",
		item: "Sitrus Berry",
		ability: "Cheek Pouch",
		moves: ['Body Press', 'Gyro Ball', 'Rest', 'Stockpile'],
		nature: 'Impish',
		gender: '',
		evs: {hp: 220, atk: 0, def: 252, spa: 4, spd: 4, spe: 36},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50,
	}
};
