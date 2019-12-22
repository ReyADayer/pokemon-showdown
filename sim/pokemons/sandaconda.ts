import {PokemonSet} from '../global-types';

export const sandaconda = (): PokemonSet => {
	return {
		name: "Sandaconda",
		species: "Sandaconda",
		item: "Focus Sash",
		ability: "Sand Spit",
		moves: ['Mud-Slap', 'Rock Tomb', 'Stealth Rock', 'Glare'],
		nature: 'Jolly',
		gender: '',
		evs: {hp: 4, atk: 252, def: 0, spa: 0, spd: 0, spe: 252},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50,
	}
};
