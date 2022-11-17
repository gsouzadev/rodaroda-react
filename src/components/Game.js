import React from 'react'

const Game = ({verifyLetter}) => {
  return (
    <div className='Game'>
        <h1>Game</h1>
        <button onClick={verifyLetter}>Finalizar Jogo</button>
    </div>
  )
}

export default Game