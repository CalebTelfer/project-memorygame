import { useEffect, useState } from "react"
import MemoryCard from "./memoryCard"
import '../componentCSS/gameBoard.css'

function GameBoard({setScore}) {
    const handleCardClick = () => {
        setScore(prevScore => prevScore + 1); // update score
      };

    return (
        <>
        <div className="gameboard">

        </div>
        </>
    )
}

export default GameBoard