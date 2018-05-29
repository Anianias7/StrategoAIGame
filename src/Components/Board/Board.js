import React, { Component } from 'react';
import Row from '../Row/Row'
import BoardWrapper from './BoardWrapper'
import {marginBoard, borderSize, boardSize} from '../constants'

export default class Board extends Component {

    render(){
        const tileSize = (boardSize/this.props.size);
        return (
            <BoardWrapper>
                    {this.makeBoardView(this.props.size, tileSize)}
            </BoardWrapper>
        )
    }

    makeBoardView = (size, tileSize) => Array.from({length: size}).map((_,i) =>
                                                      <Row
                                                          tileSize={tileSize}
                                                          size={size}
                                                          rowNo={i}
                                                          margin={marginBoard}
                                                          border={borderSize}
                                                          move={this.props.move}
                                                          gameState={this.props.gameState[i]}
                                                      />);
}