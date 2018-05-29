import React, { Component } from 'react';
import Header from '../Header/Header'
import Player from '../Player/Player'
import GameInfoWrapper from './GameInfoWrapper'
import PlayersWrapper from './PlayersWrapper'
import PointsWrapper from './PointsWrapper'
import Points from '../Points/Points'



export default class GameInfo extends Component {

    render(){
        return (
            <GameInfoWrapper>
                <Header gameName={"Stratego"}/>
                <PlayersWrapper>
                    <Player playerName={"Player 1"}/>
                    <Player playerName={"Player 2"}/>
                </PlayersWrapper>
                <PointsWrapper>
                    <Points points={this.props.gamePoints[0]}/>
                    <Points points={this.props.gamePoints[1]}/>
                </PointsWrapper>
            </GameInfoWrapper>
        );
    }



}