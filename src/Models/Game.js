import React, { Component } from 'react';
import styled from 'styled-components';
import '../App.css';
import Board from './Components/Board/Board'
import GameInfo from './Components/GameInfo/GameInfo'
import Player from "./Components/Player/Player";
import PointsCalculator from "./Components/Points/PointsCalculator"
import AIPlayer from "./Components/Player/AIPlayer";
import NoPlayer from "./Components/NoPlayer";

const GameWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

class Game extends Component {

    state = {
        board: Array.from({length: this.props.size}).map(() => Array.from({length: this.props.size},
                                                             () => { return  new Player(-1, "white")})),
        players: [new Player(0, "#FFC107"), new Player(1, "#00BCD4")],
        points: [0,0],
        moves: 0
    };

    updateBoard = (row, col) => {
        const board = [...this.state.board];
        board[row][col] = this.state.players[0];
        return {board, moves: this.state.moves + 1}
    };

    flipPlayers = () => this.state.players.map(x => x).reverse();

    validMove = (row, col) => this.state.board[row][col].playerNo === -1;

    makeMove = (row, col) => {
        if(this.validMove(row, col)) {
            const board = this.updateBoard(row, col).board;
            const pointsCalculator = new PointsCalculator(row, col, board);
            const noOfPoints = pointsCalculator.calculatePoints();
            console.log("Points " + noOfPoints);
            const currentPlayerNo = this.state.players[0].playerNo;
            const points = [...this.state.points];
            points[currentPlayerNo] += noOfPoints;
            this.setState({
                board,
                points,
                players: this.flipPlayers()

            // }, () => {
            //     console.log(this.generateNewBoards(this.state.board, Player(1, "black")));
            })
        }


    };

    render() {
        return (
            <GameWrapper>
                <Board size={this.props.size} move={this.makeMove} gameState={this.state.board}/>
                <GameInfo gamePoints={this.state.points}/>
            </GameWrapper>
        )
    }
}

export default Game;
