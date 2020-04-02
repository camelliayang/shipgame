/* 
* Component for the board
*/
import React, { useEffect } from 'react';
import Table from "./Table";
import { useSelector, useDispatch } from 'react-redux'
import { StartGame } from "../actions/gameActions";
import GamePanel from "./GamePanel.js";


const BattleGame = () => {
  const ships = useSelector(({ ships }) => ships)
  const boardSize = useSelector(({ boardSize }) => boardSize)
  const dispatch = useDispatch();
  
  //TODO: FIX the warning here: 
  //https://reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies
  useEffect(() => {
    dispatch(StartGame())
  }, []);

  const hits = ships.reduce((acc, { hits }) => {
    return [...acc, ...hits]
  }, []).filter(s => s !== "")
 
  return (
    <div id="board">
      <GamePanel />
      <Table hits={hits} boardSize={boardSize} />
    </div>
  )
}

export default BattleGame