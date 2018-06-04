import NoPlayer from "./NoPlayer";
import AIPlayer from "./AIPlayer";
import Player from "./Player";
import HumanPlayer from "./HumanPlayer";

export const flipPlayers = (players) => players.map(x => x).reverse();

const deepCopy = (obj) =>
    obj.map((el) => el.map(x => {
        if (x.playerNo === -1) {
            return new NoPlayer(x.playerNo, x.color);
        }
        else if (x.playerNo === 0) {
            return new HumanPlayer(x.playerNo, x.color);
        }
        else if (x.playerNo === 1) {
            return new AIPlayer(x.playerNo, x.color);
        }
    }));

export const checkAllPossibleMoves = (board) => {
    return board.map((row, i) => row.reduce((acc, elem, index) => elem.playerNo === -1 ? acc.concat({
        rowNo: i,
        colNo: index
    }) : acc, []))
        .reduce((acc, val) => acc.concat(val), []);
};

export const generateNewBoards = (board, player) => {
    const possibleMoves = checkAllPossibleMoves(board);
    return possibleMoves.map(move => {
        let newBoard = deepCopy(board);
        newBoard[move.rowNo][move.colNo] = player;
        return {newBoard: newBoard, move: move};
    })
};


export const isFullBoard = (board) => {
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            if (board[row][col].playerNo === -1)
                return false;
        }
    }
    return true;
};


export const randomHeuristic = (allPossibleBoards) => {
    for (let i = allPossibleBoards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allPossibleBoards[i], allPossibleBoards[j]] = [allPossibleBoards[j], allPossibleBoards[i]];
    }
    return allPossibleBoards;
};

const heuristicSumOfDifference = (points, currentPossiblePoints, isMax) => {
    if (isMax) {
        return points + currentPossiblePoints;
    } else {
        return points - currentPossiblePoints;
    }
};
const heuristicOnlySumOfMaxPoints =  (points, currentPossiblePoints, isMax) => {
    if (isMax) {
        return points + currentPossiblePoints;
    } else {
        return points;
    }
};

const heuristicOnlySumOfMinPoints = (points, currentPossiblePoints, isMax) => {
    if (isMax) {
        return points;
    } else {
        return points - currentPossiblePoints;
    }
};
