// Styles
import './StartApp.css';

const StartApp = ({startGame}) => {
  return (
    <div className="Start">
        <h1>Roda Rola Jekiti</h1>
        <p>Sua diversão está prestes a começar, aperte os cintos e clique no botão abaixo para começar!! :D</p>
        <button onClick={startGame}>Começar o jogo</button>
    </div>
  )
}

export default StartApp