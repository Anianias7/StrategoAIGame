import Player from "../Models/Player";

export default class HumanPlayer extends Player {

    constructor(playerNo, color) {
        super(playerNo, color);
    }

    move = (row, col) => {
        return {row, col}
    };

}