import React, { Component } from 'react';
import Tile from '../Tile/Tile'
import RowWrapper from './RowWrapper'



export default class Row extends Component {

    render(){
        console.log(this.props.size, this.props.tileSize);
        return (<RowWrapper
                        margin={this.props.margin}
                        size={this.props.size}
                        border={this.props.border}
                        tileSize={this.props.tileSize}>
                        {this.makeRow()}
                </RowWrapper>
        )
    }

    makeRow = () => Array.from({length: this.props.size}).map((_, i) =>
                    <Tile
                        move={this.props.move}
                        rowNo={this.props.rowNo}
                        colNo={i}
                        tileSize={this.props.tileSize}
                        index={i + this.props.rowNo}
                        size={this.props.size}
                        margin={this.props.margin}
                        border={this.props.border}
                        owner={this.props.gameState[i]}
                    />)
}