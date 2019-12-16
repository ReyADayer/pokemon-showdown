import {PokemonSet} from '../global-types';

export const physicalDragapult = (): PokemonSet => {
	return {
		name: "dragapult",
		species: "dragapult",
		item: "Choice Scarf",
		ability: "Clear Body",
		moves: ['Dragon Darts', 'U-turn', 'Phantom Force', 'Fire Blast'],
		nature: 'Jolly',
		gender: 'M',
		evs: {hp: 4, atk: 252, def: 0, spa: 0, spd: 0, spe: 252},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50,
		shiny: false,
		happiness: 0,
		pokeball: 'Master Ball',
	}
};
