import {PokemonSet} from '../global-types';

export const dubwool = (): PokemonSet => {
	return {
		name: "dubwool",
		species: "dubwool",
		item: "Sitrus Berry",
		ability: "Hustle",
		moves: ['Cotton Guard', 'Substitute', 'Body Press', 'Baton Pass'],
		nature: 'Jolly',
		gender: '',
		evs: {hp: 252, atk: 0, def: 4, spa: 0, spd: 0, spe: 252},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50,
	}
};
