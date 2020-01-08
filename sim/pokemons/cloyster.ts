import {PokemonSet} from "../global-types";

export const physicalCloyster = (): PokemonSet => {
	return {
		name: "cloyster",
		species: "cloyster",
		item: "King's Rock",
		ability: "Skill Link",
		moves: ['Icicle Spear', 'Rock Blast', 'Ice Shard', 'Shell Smash'],
		nature: 'Impish',
		gender: '',
		evs: {hp: 252, atk: 0, def: 252, spa: 0, spd: 4, spe: 0},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50,
	}
};

export const physicalCloyster2 = (): PokemonSet => {
	return {
		name: "cloyster",
		species: "cloyster",
		item: "Focus Sash",
		ability: "Skill Link",
		moves: ['Icicle Spear', 'Rock Blast', 'Ice Shard', 'Shell Smash'],
		nature: 'Jolly',
		gender: '',
		evs: {hp: 4, atk: 252, def: 0, spa: 0, spd: 0, spe: 252},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50,
	}
};

export const cloyster3 = (): PokemonSet => {
	return {
		name: "cloyster",
		species: "cloyster",
		item: "Choice Band",
		ability: "Skill Link",
		moves: ['Icicle Spear', 'Rock Blast', 'Ice Shard', 'Liquidation'],
		nature: 'Adamant',
		gender: '',
		evs: {hp: 4, atk: 252, def: 0, spa: 0, spd: 0, spe: 252},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50,
	}
};

export const cloyster4 = (): PokemonSet => {
	return {
		name: "cloyster",
		species: "cloyster",
		item: "Focus Sash",
		ability: "Skill Link",
		moves: ['Icicle Spear', 'Rock Blast', 'Ice Shard', 'Shell Smash'],
		nature: 'Adamant',
		gender: '',
		evs: {hp: 0, atk: 252, def: 4, spa: 0, spd: 0, spe: 252},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50,
	}
};

export const cloyster5 = (): PokemonSet => {
	return {
		name: "cloyster",
		species: "cloyster",
		item: "White Herb",
		ability: "Shell Armor",
		moves: ['Surf', 'Ice Beam', 'Mud Shot', 'Shell Smash'],
		nature: 'Modest',
		gender: '',
		evs: {hp: 0, atk: 0, def: 0, spa: 252, spd: 4, spe: 252},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50,
	}
};
