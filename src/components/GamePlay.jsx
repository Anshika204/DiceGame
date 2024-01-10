import React from 'react'
import {useState} from 'react';
import TotalScores from "./TotalScores";
import NumberSelector from "./NumberSelector";
import RolledDice from './RolledDice';
import Rules from './Rules';
import './GamePlay.css'

const GamePlay = () => {
  const[score,setScore]=useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const[currDice,setCurrDice]=useState(1);
  const[error,setError]=useState("");
  const[showRules,setShowRules] =useState(false);


  const generateRandomNumber=(min,max) => {
    return Math.floor(Math.random() * (max-min)+min);
};
const rollDice=()=>
{
    const randomNumber=generateRandomNumber(1,7);
    setCurrDice((prev)=>randomNumber);

    if(!selectedNumber){
      setError("You Haven't selected any number");
      return ;
    }
    if(selectedNumber === randomNumber)
    {
      setScore((prev)=>prev+randomNumber)
    }
    else{
      setScore((prev)=>prev-2);
    }

    setSelectedNumber(undefined)
}

const resetHandler =()=>
{
  setScore(0);
  setSelectedNumber(undefined);
  setCurrDice(1);
  setShowRules(false);
  setError("")
}



  return (
    <main style={{
      paddingTop: "10px",
    }}>
        <div style={{
          display: "flex",
          justifyContent: "space-around",
        }}>
        <TotalScores score={score}/>
        <NumberSelector setError={setError} error={error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
        </div>
        <RolledDice currDice={currDice} rollDice={rollDice} />
        <div className="butns">
          <button onClick={resetHandler}>Reset</button>
          <button onClick={()=>setShowRules((prev)=>!prev)}>Rules</button>
        </div>
        {showRules && <Rules/>}
    </main>
  )
}

export default GamePlay

