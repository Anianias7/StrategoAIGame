import Player from "../Models/Player";

export default class NoPlayer extends Player {

    constructor(color) {
        super(-1, color);
        this.name = "No Player";
    }
}
