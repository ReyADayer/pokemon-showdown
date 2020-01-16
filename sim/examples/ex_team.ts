import {Pool, Pools, TeamGenerator} from "../tools/exhaustive-runner";
import {Dex} from "../dex";
import {PRNG} from "../prng";

function onlyValid<T>(
	gen: number, obj: { [key: string]: T }, getter: (k: string) => AnyObject,
	additional?: (k: string, v: AnyObject) => boolean, nonStandard?: boolean
) {
	return Object.keys(obj).filter(k => {
		const v = getter(k);
		return v.gen <= gen &&
			(!v.isNonstandard || !!nonStandard) &&
			(!additional || additional(k, v));
	});
}

const prng = new PRNG();

function createPools(dex: typeof Dex): Pools {
	return {
		pokemon: new Pool(onlyValid(dex.gen, dex.data.Pokedex, p => dex.getTemplate(p),
			(_, p) => (p.species !== 'Pichu-Spiky-eared' && p.species.substr(0, 8) !== 'Pikachu-')), prng),
		items: new Pool(onlyValid(dex.gen, dex.data.Items, i => dex.getItem(i)), prng),
		abilities: new Pool(onlyValid(dex.gen, dex.data.Abilities, a => dex.getAbility(a)), prng),
		moves: new Pool(onlyValid(dex.gen, dex.data.Movedex, m => dex.getMove(m),
			m => (m !== 'struggle' && (m === 'hiddenpower' || m.substr(0, 11) !== 'hiddenpower'))), prng),
	};
}

const toID = Dex.getId;

function getSignatures(dex: typeof Dex, pools: Pools): Map<string, { item: string, move?: string }[]> {
	const signatures = new Map();
	for (const id of pools.items.possible) {
		const item = dex.data.Items[id];
		if (item.megaEvolves) {
			const pokemon = toID(item.megaEvolves);
			const combo = {item: id};
			let combos = signatures.get(pokemon);
			if (!combos) {
				combos = [];
				signatures.set(pokemon, combos);
			}
			combos.push(combo);
		} else if (item.itemUser) {
			for (const user of item.itemUser) {
				const pokemon = toID(user);
				const combo: { item: string, move?: string } = {item: id};
				if (item.zMoveFrom) combo.move = toID(item.zMoveFrom);
				let combos = signatures.get(pokemon);
				if (!combos) {
					combos = [];
					signatures.set(pokemon, combos);
				}
				combos.push(combo);
			}
		}
	}
	return signatures;
}


export function generateExTeam(): PokemonSet[] {
	const dex = Dex.forFormat('gen8battlestadiumsingles');
	const pools = createPools(dex);

	const generator = new TeamGenerator(dex, null, pools, getSignatures(dex, pools));

	return generator.generate();
}
