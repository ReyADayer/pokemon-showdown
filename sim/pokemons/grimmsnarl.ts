import {PokemonSet} from '../global-types';

export const hozyoGrimmsnarl = (): PokemonSet => {
	return {
		name: "grimmsnarl",
		species: "grimmsnarl",
		item: "Light Clay",
		ability: "Prankster",
		moves: ['Foul Play', 'Taunt', 'Reflect', 'Light Screen'],
		nature: 'Impish',
		gender: '',
		evs: {hp: 252, atk: 0, def: 252, spa: 0, spd: 0, spe: 4},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50,
	}
};
