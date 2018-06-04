import Player from "../Models/Player";
import {findBestMinMaxMove} from "./MinMaxAlgorithm";
import {isFullBoard} from "./GameAngine";
import {findBestAlphaBetaMove} from "./AlphaBeta";


export default class AIPlayer extends Player {

    constructor(playerNo, color) {
        super(playerNo, color);
        this.name = "AI Player"
    }

    getMove = (moveFn, board, player, players) => {
        setTimeout(() => {
            if(!isFullBoard(board)){
                // const move = findBestMinMaxMove(board, 3, players);
                const move = findBestAlphaBetaMove(board, 5, players);
                moveFn(move.rowNo, move.colNo);
            }
        }, 200);
    }
}