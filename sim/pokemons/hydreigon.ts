import {PokemonSet} from '../global-types';

export const hydreigon = (): PokemonSet => {
	return {
		name: "hydreigon",
		species: "hydreigon",
		item: "Salac Berry",
		ability: "Levitate",
		moves: ['Dark Pulse', 'Flash Cannon', 'Nasty Plot', 'Substitute'],
		nature: 'Timid',
		gender: '',
		evs: {hp: 4, atk: 0, def: 0, spa: 252, spd: 0, spe: 252},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50
	}
};
