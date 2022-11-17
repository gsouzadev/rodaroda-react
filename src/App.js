// Styles
import './App.css';

// React
import { useCallback, useEffect, useState } from 'react';

// Datas
import { wordsList } from './data/words';

// Components
import StartApp from './components/StartApp';
import Game from './components/Game';
import GameOver from './components/GameOver';

// Modos de Jogo
const modes = [
  {id: 1, status: 'start'},
  {id: 2, status: 'game'},
  {id: 3, status: 'gameOver'}
]

function App() {
  const [gameModes, setGameModes] = useState(modes[0].status);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState('');
  const [pickedCategory, setPickedCategory] = useState('');
  const [letters, setLetters] = useState([]);

  const pickedWordAndCategory = () => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    console.log(category);

    const word = words[category][Math.floor(Math.random() * words[category].length)];
    
    console.log(word);

    return {category, word};    
  }

  const startGame = () => {
    pickedWordAndCategory();
    setGameModes(modes[1].status);
  }

  const verifyLetter = () => {
    setGameModes(modes[2].status);
  }

  const retry = () => {
    setGameModes(modes[0].status);
  }

  return (
    <div className="App">
      {gameModes === 'start' && <StartApp startGame={startGame}  />}
      {gameModes === 'game' && <Game verifyLetter={verifyLetter} />}
      {gameModes === 'gameOver' && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
