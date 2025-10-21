import { useState } from 'react'
import './App.css'
import Header from './components/header'
import GameBoard from './components/gameBoard'

function App() {
  const [score, setScore] = useState(0);

  return (
    <>
      <Header score={score}/>
      <GameBoard setScore={setScore}/>
    </>
  )
}

export default App
