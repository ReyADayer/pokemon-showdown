// カジリガメ

import {PokemonSet} from "../global-types";

export const drednaw = (): PokemonSet => {
	return {
		name: "Drednaw",
		species: "Drednaw",
		item: "Focus Sash",
		ability: "Swift Swim",
		moves: ['Head Smash', 'Liquidation', 'Counter', 'Stealth Rock'],
		nature: 'Adamant',
		gender: 'M',
		evs: {hp: 4, atk: 252, def: 0, spa: 0, spd: 0, spe: 252},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50
	}
};
