import {PokemonSet, StatsTable} from '../global-types';
import {Dex} from "../dex";

export const generateRandomTeam = (): PokemonSet[] => {
	const team: PokemonSet[] = Dex.generateTeam('gen8battlestadiumsingles');
	team.map(pokemonSet => {
		pokemonSet.level = 50;
		pokemonSet.evs = generateRandomEvs();
	});
	return team
};

export const generateRandomEvs = (): StatsTable => {
	const random1 = getRandomInt(4);

	switch (random1) {
		case 0:
			return {hp: 4, atk: 252, def: 0, spa: 0, spd: 0, spe: 252};
		case 1:
			return {hp: 4, atk: 0, def: 0, spa: 252, spd: 0, spe: 252};
		case 2:
			return {hp: 252, atk: 0, def: 252, spa: 0, spd: 0, spe: 4};
		case 3:
			return {hp: 252, atk: 0, def: 0, spa: 0, spd: 252, spe: 4};
	}
};

function getRandomInt(max: number) {
	return Math.floor(Math.random() * Math.floor(max));
}

export const maxIvs = (): StatsTable => {
	return {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31}
};
