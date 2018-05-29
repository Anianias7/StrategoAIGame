import React, { Component } from 'react';
import styled from 'styled-components';


export default styled.div `
    width: ${props => props.tileSize}px;
    border: ${'2px solid #B56357'}
    background: ${props => props.owner.playerNo === -1 ? props.index %2 === 0 ?  '#EAE3EA' :  '#A7B3A5' : 
    props.owner.color };
`
