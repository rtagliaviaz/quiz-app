import React from 'react'

const NextQuestion = ({points, playAgain}) => {
  return (
    <div className="score-board">
      <div className="score">{points} / 3 correct answers!</div>
      <button className="playBtn" onClick={playAgain}>Try Again?</button>
    </div>
  )
}

export default NextQuestion
