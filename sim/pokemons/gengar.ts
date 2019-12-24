// ゲンガー

import {PokemonSet} from '../global-types';

export const gengar = (): PokemonSet => {
	return {
		name: "Gengar1",
		species: "Gengar",
		item: "Black Sludge",
		ability: "Cursed Body",
		moves: ["shadowball", "encore", "nastyplot", "focusblast"],
		nature: 'Timid',
		gender: '',
		evs: {hp: 4, atk: 0, def: 0, spa: 252, spd: 0, spe: 252},
		ivs: {hp: 31, atk: 0, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50,
	}
};
