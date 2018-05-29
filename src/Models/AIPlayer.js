import Player from "../Models/Player";
import NoPlayer from "./NoPlayer";


export default class AIPlayer extends Player {

    constructor(playerNo, color) {
        super(playerNo, color);
        this.name = "AI Player"
    }

    deepCopy = (obj) =>
        obj.map((el) => el.map(x => {
            if (x.playerNo === -1) {
                return new NoPlayer(x.playerNo, x.color);
            }
            else if (x instanceof Player) {
                return new Player(x.playerNo, x.color);
            }
            else {
                return new AIPlayer(x.playerNo, x.color);
            }
        }));

    checkAllPassibleMoves = (board) => {
        return board.map((row, i) => row.reduce((acc, elem, index) => elem.playerNo === -1 ? acc.concat({
            i,
            index
        }) : acc, []))
            .reduce((acc, val) => acc.concat(val), []);
    };

    generateNewBoards = (board, player) => {
        this.checkAllPassibleMoves(board).map(elem => {
            let newBoard = this.deepCopy(board);
            newBoard[elem.rowNo][elem.colNo] = player;
            return {newBoard, elem};
        })
    };

    // minmax = (board, player, depth, points) => {
    //     if(depth === 0 || this.checkAllPassibleMoves(board).length === 0){
    //         return 0;
    //     }
    //     let possibleMoves = this.generateNewBoards(board, player);
    //
    //     possibleMoves.map(move => {
    //
    //
    //
    //
    //
    //        })
    //
    //
    //     }
    //
    // }
}