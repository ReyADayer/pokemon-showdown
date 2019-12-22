import {PokemonSet} from '../global-types';

export const physicalDurant = (): PokemonSet => {
	return {
		name: "durant",
		species: "durant",
		item: "Life Orb",
		ability: "Hustle",
		moves: ['Iron Head', 'Superpower', 'Thunder Fang', 'Stone Edge'],
		nature: 'Jolly',
		gender: '',
		evs: {hp: 4, atk: 252, def: 0, spa: 0, spd: 0, spe: 252},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50,
	}
};
