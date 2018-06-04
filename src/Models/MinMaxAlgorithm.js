import PointsCalculator from "./PointsCalculator";
import {flipPlayers, generateNewBoards, isFullBoard} from "./GameAngine";

const minmax = (board, depth, maximizerPlayer, initMove, player, players, points) => {
    let noOfPoints = 0;
    if (depth === 0 || isFullBoard(board)) {
        // const pointsCalculator = new PointsCalculator(initMove.rowNo, initMove.colNo, board);
        // const pointsNo = pointsCalculator.calculatePoints();
        return {score: points};
    }
    const boardWithInitMove = generateNewBoards(board, player);
    if (maximizerPlayer) {
        let bestVal = -Infinity;
        boardWithInitMove.forEach(elem => {
            let flip = flipPlayers(players);
            const pointsCalculator = new PointsCalculator(elem.move.rowNo, elem.move.colNo, elem.newBoard);
            noOfPoints = points + pointsCalculator.calculatePoints();
            let {score} = minmax(elem.newBoard, depth - 1, false, elem.move, flip[0], flip, noOfPoints);
            if (score > bestVal) {
                bestVal = score;
            }

        });
        return {score: bestVal};
    }
    else {
        let bestVal = Infinity;
        boardWithInitMove.forEach(elem => {
            let flip = flipPlayers(players);
            const pointsCalculator = new PointsCalculator(elem.move.rowNo, elem.move.colNo, elem.newBoard);
            noOfPoints = points - pointsCalculator.calculatePoints();
            let {score, initMove} = minmax(elem.newBoard, depth - 1, true, elem.move, flip[0], flip, noOfPoints);
            if (score < bestVal) {
                bestVal = score;

            }

        });
        return {score: bestVal};
    }
};

export const findBestMinMaxMove = (board, depth, players) => {
    const boardWithInitMove = generateNewBoards(board, players[0]);
    let scoresAndMoves = [];
    boardWithInitMove.forEach(elem => {
        const flip = flipPlayers(players);
        const pointsCalculator = new PointsCalculator(elem.move.rowNo, elem.move.colNo, elem.newBoard);
        const score = pointsCalculator.calculatePoints();
        let algorithmResult = minmax(elem.newBoard, depth - 1, false, elem.move, flip[0], flip, score);
        scoresAndMoves.push({...algorithmResult, initMove: elem.move});
    });

    const max = scoresAndMoves.reduce((prev, curr) => prev.score > curr.score ? prev : curr);
    return max.initMove;

};




