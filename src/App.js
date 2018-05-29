import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Board from './Components/Board/Board'
import GameInfo from './Components/GameInfo/GameInfo'
import Game from "./Models/Game";


class App extends Component {

  render() {
    return (
     <Game size={2}/>
    )
  }
}

export default App;
