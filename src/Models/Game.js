import React, {Component} from 'react';
import styled from 'styled-components';
import '../App.css';
import Board from '../Components/Board/Board'
import GameInfo from '../Components/GameInfo/GameInfo'
import PointsCalculator from "./PointsCalculator"

import HumanPlayer from "./HumanPlayer";
import NoPlayer from "./NoPlayer";
import AIPlayer from "./AIPlayer";

const GameWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

class Game extends Component {

    state = {
        board: Array.from({length: this.props.size}).map(() => Array.from({length: this.props.size},
            () => {
                return new NoPlayer("white")
            })),
        players: [new AIPlayer(0, "#FFC107"), new AIPlayer(1, "#00BCD4")],
        points: [0, 0],
        moves: 0
    };

    updateBoard = (row, col) => {
        const board = [...this.state.board];
        board[row][col] = this.state.players[0];
        return {board, moves: this.state.moves + 1}
    };

    flipPlayers = () => this.state.players.map(x => x).reverse();

    validMove = (board, row, col) => {
        return board[row][col].playerNo === -1
    };


    move = (row, col) => {
        console.log('row: ', row , 'col: ', col);
        if (this.validMove(this.state.board, row, col)) {
            const board = this.updateBoard(row, col).board;
            const pointsCalculator = new PointsCalculator(row, col, board);
            const noOfPoints = pointsCalculator.calculatePoints();
            const currentPlayerNo = this.state.players[0].playerNo;
            const points = [...this.state.points];
            points[currentPlayerNo] += noOfPoints;
            this.setState({
                board,
                points,
                players: this.flipPlayers()
            }, () => {
                this.state.players[0].getMove(this.move, this.state.board, this.state.players[0], this.state.players);
            })
        }
        else {

        }
    };

    componentDidMount() {
        this.state.players[0].getMove(this.move, this.state.board, this.state.players[0], this.state.players);
    }


    render() {
        return (
            <GameWrapper>
                <Board size={this.props.size} move={this.move} gameState={this.state.board}/>
                <GameInfo gamePoints={this.state.points}/>
            </GameWrapper>
        )
    }
}

export default Game;
