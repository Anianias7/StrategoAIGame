import React, { Component } from 'react';
import styled from 'styled-components';
import {marginBoard, borderSize, boardSize} from '../constants'


export default styled.div `
    margin: ${marginBoard}px;
    width: ${boardSize}px;
    height: ${boardSize}px;
    border: ${borderSize}px solid #B56357;
    box-shadow: 10px 10px 5px grey;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
`