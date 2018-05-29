import Player from "../Models/Player";

export default class HumanPlayer extends Player {

    constructor(playerNo, color) {
        super(playerNo, color);
    }

    validMove = (board, row, col) => board[row][col].playerNo === -1;

    makeMove = (board, row, col) => {
        if(this.validMove)

    }




}