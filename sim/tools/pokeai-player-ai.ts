import {RandomPlayerAI} from "./random-player-ai";

export class PokeaiPlayerAI extends RandomPlayerAI {
	private turn: number = 0;

	// TODO : 技選択AIを追加
	protected chooseMove(moves: { choice: string, move: AnyObject }[]): string {
		moves.map(swi => {
			//	console.log(swi)
		});
		return this.prng.sample(moves).choice;
	}

	// TODO : 交換AIを追加
	protected chooseSwitch(switches: { slot: number, pokemon: AnyObject }[]): number {
		switches.map(swi => {
			//	console.log(swi)
		});
		return this.prng.sample(switches).slot;
	}

	receiveRequest(request: AnyObject) {
		this.turn += 1;
		console.log(this.turn);
		//console.log(JSON.stringify(request));
		console.log(request);
		super.receiveRequest(request);
		if(request.active){
			request.active[0].moves.map(move =>{
				console.log(move);
			});
			console.log(request.active[0].maxMoves);
		}

		request.side.pokemon.map(pokemon => {
			//console.log(pokemon);
		});
		console.log(request.side)
	}
}
