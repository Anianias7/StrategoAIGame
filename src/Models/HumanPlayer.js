import Player from "../Models/Player";

export default class HumanPlayer extends Player {

    constructor(playerNo, color) {
        super(playerNo, color);
        this.name =  "Human Player";
    }

    getMove = () => {};

}