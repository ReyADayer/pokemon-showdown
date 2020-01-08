// エルフーン

import {PokemonSet} from '../global-types';

export const whimsicott = (): PokemonSet => {
	return {
		name: "Whimsicott",
		species: "Whimsicott",
		item: "Leftovers",
		ability: "Prankster",
		moves: ['Moonblast', 'Leech Seed', 'Substitute', 'Endeavor'],
		nature: 'Timid',
		gender: 'M',
		evs: {hp: 252, atk: 0, def: 92, spa: 4, spd: 44, spe: 116},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50
	}
};

export const whimsicott2 = (): PokemonSet => {
	return {
		name: "Whimsicott",
		species: "Whimsicott",
		item: "Lagging Tail",
		ability: "Prankster",
		moves: ['Moonblast', 'Endeavor', 'Substitute', 'Switcheroo'],
		nature: 'Timid',
		gender: 'M',
		evs: {hp: 252, atk: 0, def: 0, spa: 252, spd: 0, spe: 4},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50
	}
};

export const whimsicott3 = (): PokemonSet => {
	return {
		name: "Whimsicott",
		species: "Whimsicott",
		item: "Focus Sash",
		ability: "Prankster",
		moves: ['Moonblast', 'Stun Spore', 'Memento', 'Taunt'],
		nature: 'Modest',
		gender: 'M',
		evs: {hp: 0, atk: 0, def: 0, spa: 252, spd: 4, spe: 252},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50
	}
};
