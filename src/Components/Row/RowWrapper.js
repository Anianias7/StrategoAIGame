import React, { Component } from 'react';
import styled from 'styled-components';

export default styled.div `
    width: ${props => props.tileSize * props.size}px;
    height: ${props => props.tileSize}px;
    display: flex;
    flex-direction: row;
`