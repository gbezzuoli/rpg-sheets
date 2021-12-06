import React, { Component } from 'react';
import { DiceRoll } from 'rpg-dice-roller';

class Dados extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const dice = new DiceRoll('3d5');
    const result = dice.total;
    return (
      <div>
        <h1>Dice Roller</h1>
        <p>O resultado do {dice.notation} é {result}</p>
        <p>{dice.output}</p>
      </div>
    );
  }
}

export default Dados;
