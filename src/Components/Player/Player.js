import React, { Component } from 'react';
import PlayerWrapper from './PlayerWrapper';

export default class Player extends Component {



    render(){
        return(
            <PlayerWrapper>
                {this.props.playerName}
            </PlayerWrapper>
        );
    }
}