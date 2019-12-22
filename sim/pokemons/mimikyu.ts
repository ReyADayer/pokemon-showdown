import {PokemonSet} from '../global-types';

export const mimikyu = (): PokemonSet => {
	return {
		name: "mimikyu",
		species: "mimikyu",
		item: "Expert Belt",
		ability: "Disguise",
		moves: ['Shadow Claw', 'Play Rough', 'Shadow Sneak', 'Swords Dance'],
		nature: 'Jolly',
		gender: '',
		evs: {hp: 4, atk: 252, def: 0, spa: 0, spd: 0, spe: 252},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50,
	}
};

export const mimikyu2 = (): PokemonSet => {
	return {
		name: "mimikyu",
		species: "mimikyu",
		item: "Life Orb",
		ability: "Disguise",
		moves: ['Shadow Claw', 'Play Rough', 'Shadow Sneak', 'Swords Dance'],
		nature: 'Jolly',
		gender: '',
		evs: {hp: 4, atk: 252, def: 0, spa: 0, spd: 0, spe: 252},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50,
	}
};

export const mimikyuScarf = (): PokemonSet => {
	return {
		name: "mimikyu",
		species: "mimikyu",
		item: "Choice Scarf",
		ability: "Disguise",
		moves: ['Shadow Claw', 'Play Rough', 'Shadow Sneak', 'Wood Hammer'],
		nature: 'Jolly',
		gender: '',
		evs: {hp: 4, atk: 252, def: 0, spa: 0, spd: 0, spe: 252},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50,
	}
};
