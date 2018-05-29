import React, { Component } from 'react';
import TileWrapper from './TileWrapper'


export default class Tile extends Component {


    render(){
        const {rowNo, colNo, move} = this.props;
        return <TileWrapper
                            {...this.props}
                            onClick={()=> move(rowNo, colNo)}
        />
    }
}