import { useState } from 'react'
import './App.css'
import Header from './components/header'
import GameBoard from './components/gameBoard'

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <>
      <Header score={score} highScore={highScore}/>
      <GameBoard score={score} highScore={highScore} setScore={setScore} setHighScore={setHighScore}/>
    </>
  )
}

export default App
