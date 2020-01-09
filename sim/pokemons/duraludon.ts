// ジュラルドン

import {PokemonSet} from '../global-types';

export const duraludon = (): PokemonSet => {
	return {
		name: "Duraludon",
		species: "Duraludon",
		item: "Expert Belt",
		ability: "Stalwart",
		moves: ['Steel Beam', 'Dragon Pulse', 'Solar Beam', 'Thunderbolt'],
		nature: 'Modest',
		gender: '',
		evs: {hp: 204, atk: 0, def: 76, spa: 164, spd: 4, spe: 60},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50,
	}
};
