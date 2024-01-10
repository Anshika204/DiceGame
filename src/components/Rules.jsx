import React from 'react'

const Rules = () => {
  return (
    <div style={{
        backgroundColor: "#fbf1f1",
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto",
        marginTop: "40px",
        borderRadius: "5px",
    }}>
      <h2 style={{
        fontSize: "24px",
      }}>How to play Dice game</h2>
      <div style={{
        marginTop: "24px",
      }}>

        <ul>
          <li>Select any Number.</li>
          <li>After click on dice if selected number is equal to dice number you
          will get same point as dice{" "}</li>
          <li>if you get wrong guess then 2 point will be dedcuted</li>
        </ul>
      </div>
    </div>
  )
}

export default Rules
