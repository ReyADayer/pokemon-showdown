// タイプ: ヌル

import {PokemonSet} from "../global-types";

export const typenull = (): PokemonSet => {
	return {
		name: "Type: Null",
		species: "Type: Null",
		item: "Eviolite",
		ability: "Battle Armor",
		moves: ['Tri Attack', 'U-turn', 'Rest', 'Sleep Talk'],
		nature: 'Relaxed',
		gender: '',
		evs: {hp: 252, atk: 0, def: 252, spa: 0, spd: 4, spe: 0},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50,
	}
};

export const typenull2 = (): PokemonSet => {
	return {
		name: "Type: Null",
		species: "Type: Null",
		item: "Eviolite",
		ability: "Battle Armor",
		moves: ['Thunder Wave', 'U-turn', 'Rest', 'Sleep Talk'],
		nature: 'Relaxed',
		gender: '',
		evs: {hp: 252, atk: 0, def: 252, spa: 0, spd: 4, spe: 0},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50,
	}
};

export const typenull3 = (): PokemonSet => {
	return {
		name: "Type: Null",
		species: "Type: Null",
		item: "Eviolite",
		ability: "Battle Armor",
		moves: ['Crush Claw', 'U-turn', 'Thunder Wave', 'Icy Wind'],
		nature: 'Relaxed',
		gender: '',
		evs: {hp: 244, atk: 0, def: 196, spa: 0, spd: 68, spe: 0},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 0},
		level: 50,
	}
};
