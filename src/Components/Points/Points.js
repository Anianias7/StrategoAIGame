import React, { Component } from 'react';
import PointsWrapper from './PointsWrapper'



export default class Points extends Component{


    render(){
        return(
            <PointsWrapper>
                {this.props.points}
            </PointsWrapper>
        );
    }

}
