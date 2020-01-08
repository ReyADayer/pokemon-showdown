// バンギラス

import {PokemonSet} from "../global-types";

export const tyranitar = (): PokemonSet => {
	return {
		name: "Tyranitar",
		species: "Tyranitar",
		item: "Weakness Policy",
		ability: "Sand Stream",
		moves: ['Rock Blast', 'Crunch', 'Fire Punch', 'Brick Break'],
		nature: 'Careful',
		gender: 'M',
		evs: {hp: 252, atk: 76, def: 4, spa: 0, spd: 116, spe: 60},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50,
		shiny: false,
		happiness: 0,
		pokeball: 'Master Ball',
	}
};

export const tyranitar2 = (): PokemonSet => {
	return {
		name: "Tyranitar",
		species: "Tyranitar",
		item: "Focus Sash",
		ability: "Sand Stream",
		moves: ['Rock Tomb', 'Foul Play', 'Stealth Rock', 'Taunt'],
		nature: 'Adamant',
		gender: 'M',
		evs: {hp: 0, atk: 252, def: 0, spa: 0, spd: 4, spe: 252},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50,
		shiny: false,
		happiness: 0,
		pokeball: 'Master Ball',
	}
};
