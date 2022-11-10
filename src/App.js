// Styles
import './App.css';

// React
import { useCallback, useEffect, useState } from 'react';

// Datas
import { wordsList } from './data/words';

// Components
import StartApp from './components/StartApp';
import Game from './components/Game';

const modes = [
  {id: 1, status: 'start'},
  {id: 2, status: 'game'},
  {id: 3, status: 'gameOver'}
]

function App() {
  const [gameModes, setGameModes] = useState(modes[0].status);
  const [words] = useState(wordsList);

  const startGame = () => {
    setGameModes(modes[1].status);
  }

  return (
    <div className="App">
      {gameModes === 'start' && <StartApp startGame={startGame}  />}
      {gameModes === 'game' && <Game />}
      {gameModes === 'gameOver' && <StartApp />}
    </div>
  );
}

export default App;
