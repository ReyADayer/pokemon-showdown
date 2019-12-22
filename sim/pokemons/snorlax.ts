import {PokemonSet} from '../global-types';

export const physicalSnorlax = (): PokemonSet => {
	return {
		name: "snorlax",
		species: "snorlax",
		item: "Figy Berry",
		ability: "Thick Fat",
		moves: ['Body Slam', 'Fire Punch', 'Iron Head', 'Curse'],
		nature: 'Impish',
		gender: '',
		evs: {hp: 252, atk: 0, def: 252, spa: 0, spd: 4, spe: 0},
		ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
		level: 50,
	}
};
