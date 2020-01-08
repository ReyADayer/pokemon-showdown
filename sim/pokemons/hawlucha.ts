// ルチャブル

import {PokemonSet} from '../global-types';

export const hawlucha = (): PokemonSet => {
	return {
		name: "Hawlucha",
		species: "Hawlucha",
		item: "Weakness Policy",
		ability: "Mold Breaker",
		moves: ['Brave Bird', 'Close Combat', 'Iron Head', 'Sword Dance'],
		nature: 'Jolly',
		gender: 'M',
		evs: {hp: 140, atk: 252, def: 0, spa: 0, spd: 0, spe: 116},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50
	}
};

export const hawlucha2 = (): PokemonSet => {
	return {
		name: "Hawlucha",
		species: "Hawlucha",
		item: "Lum Berry",
		ability: "Mold Breaker",
		moves: ['Brave Bird', 'Close Combat', 'Thunder Punch', 'Sword Dance'],
		nature: 'Jolly',
		gender: 'M',
		evs: {hp: 0, atk: 252, def: 0, spa: 0, spd: 4, spe: 252},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50
	}
};
