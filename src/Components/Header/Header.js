import React, { Component } from 'react';
import HeaderWrapper from './HeaderWrapper'

export default class Header extends Component {

    render(){
        return (
            <HeaderWrapper>
                {this.props.gameName}
            </HeaderWrapper>

        );
    }



}