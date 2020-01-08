// ストリンダー

import {PokemonSet} from '../global-types';

export const toxtricity = (): PokemonSet => {
	return {
		name: "Toxtricity",
		species: "Toxtricity",
		item: "Assault Vest",
		ability: "Punk Rock",
		moves: ['Boomburst', 'Overdrive', 'Sludge Bomb', 'Nuzzle'],
		nature: 'Modest',
		gender: '',
		evs: {hp: 196, atk: 0, def: 4, spa: 204, spd: 12, spe: 96},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50,
	}
};
