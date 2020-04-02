/*
*  Component for the game.
*/
import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { PlayTurn, RestartGame, SetMessage } from "../actions/gameActions";

const PlayerBoard = () => {
  const [target, setTarget] = useState('');
  const message = useSelector(({ message }) => message)
  const numShips = useSelector(({ numShips }) => numShips)
  const boardSize = useSelector(({ boardSize }) => boardSize)
  const shipLength = useSelector(({ shipLength }) => shipLength)
  const canPlayTurn = useSelector((state) => state.sunk !== state.numShips)
  
  const dispatch = useDispatch()

  const playTurn = () => {
    if(canPlayTurn){
      dispatch(PlayTurn(target))
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      playTurn()
    }
  }

  const handleInputChange = (e) => setTarget(e.target.value)

  return (
    <div>
      <div className="game-info">
        <h3>Game info:</h3>
        <p>boardSize: {boardSize}</p>
        <p>numShips: {numShips}</p>
        <p>shipLength: {shipLength}</p>
      </div>
      <h1 id="messageArea">{message}</h1>
      <form>
        <div className="input-group">
          <input type="text" onKeyDown={handleKeyDown} onChange={handleInputChange} value={target} placeholder="00" className="form-control" />
          <input type="button" onClick={playTurn} value="Fire!" className="btn btn-danger" />
        </div>
      </form>
    </div>
  )
}

const GamePanel = () => {
  const dispatch = useDispatch()

  const restartGame = () => {
    var boardSize = parseInt(prompt("Please enter board size:", 4));
    var numShips = parseInt(prompt("Please enter ship number:", 3));
    var shipLength = parseInt(prompt("Please enter ship length:", 2));

    if (isNaN(boardSize) || isNaN(numShips) || isNaN(shipLength)) {
      dispatch(SetMessage("All inputs needs to be numbers and > 0"))
    } else {
      dispatch(RestartGame({ boardSize, numShips, shipLength }))
    }
  }

  return (
    <div className='GamePanel'>
      <input type="button" onClick={restartGame} value="New game" className="btn btn-primary left btn-block" />
      <PlayerBoard />
    </div>
  )
}

export default GamePanel;