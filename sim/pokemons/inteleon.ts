// インテレオン

import {PokemonSet} from '../global-types';

export const inteleon = (): PokemonSet => {
	return {
		name: "Inteleon",
		species: "Inteleon",
		item: "Light Clay",
		ability: "Torrent",
		moves: ['Scald', 'Icy Wind', 'Reflect', 'Light Screen'],
		nature: 'Modest',
		gender: 'M',
		evs: {hp: 236, atk: 0, def: 20, spa: 20, spd: 12, spe: 220},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50,
		shiny: false,
		happiness: 0,
		pokeball: 'Master Ball',
	}
};
