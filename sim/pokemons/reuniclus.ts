// ランクルス

import {PokemonSet} from '../global-types';

export const reuniclus = (): PokemonSet => {
	return {
		name: "Reuniclus1",
		species: "Reuniclus",
		item: "Leftovers",
		ability: "Magic Guard",
		moves: ['Psychic', 'Focus Blast', 'Shadow Ball', 'Trick Room'],
		nature: 'Quiet',
		gender: '',
		evs: {hp: 252, atk: 0, def: 4, spa: 252, spd: 0, spe: 0},
		ivs: {hp: 31, atk: 0, def: 31, spa: 31, spd: 31, spe: 0},
		level: 50,
	}
};
