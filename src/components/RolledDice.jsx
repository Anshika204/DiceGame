import React from 'react';
import "./RolledDice.css";

const RolledDice = ({currDice,rollDice}) => {

  return (
    <div className="mainContent">
        <div className='Dice' onClick={rollDice}>
            <img src={`/images/Dice/dice_${currDice}.png`} alt="dice1"/>
        </div>
        <p>
            Click on Dice to roll 
        </p>
    </div>
  );
}

export default RolledDice;
