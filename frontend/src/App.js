import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import {postGame} from './api';
import Results from './results';
import PastGames from './pastGames';


function App() {
  return (
    <div className="App">
       <h1>ROCK, PAPER, SCISSORS</h1>
      <PlayGame/>
    </div>
  );
}

function PlayGame({gameState}) {
  const [playerMove, setPlayerMove] = useState(-1);
  const [computerMove, setComputerMove] = useState(-1);
  const [showButton, setShowButton] = useState(true);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [showNotificationMessage, setShowNotificationMessage] = useState(false)

const play = ({player, computer}) => {
    if(player === computer) {
      return "draw"
    }
    else if (player % 3 !== ((computer + 1) % 3)) {
       return "computer"
    }
  else {
      return "player"
  }
}

  function Notification({message}) {
    if (message === null) {
        return null;
    }
    return (
        <div>
            {message}
        </div>
    )
}


useEffect(() => {
    async function finishGame() {
        const data = {
            winner: play({player: playerMove, computer: computerMove}),
            playerMove,
            computerMove
        }
        if (playerMove !== -1) {
            await postGame(data).then(response => {
                if (data.winner === "computer") {
                    setNotificationMessage("Computer Wins 😭")
                }
                else if (data.winner === "player") {

                    setNotificationMessage("Player Wins 😁")
                }
                else if (data.winner === "draw") {
                    setNotificationMessage("DRAW")
                }
            })
        }
    }
    finishGame().then(_ => {
            setPlayerMove(-1)
        })

}, [showButton])

    const computerPlay = () => {
        setComputerMove(Math.floor(Math.random() * 3));
        setShowButton(false)
    }

    const playerPlay = (event) => {
        setPlayerMove(Number(event.target.value))
        setShowButton(true);
    }

    return (
        <>
            {showNotificationMessage && <Notification message={notificationMessage} />}
            <div>
              <div>
                  <select defaultValue={0}>
                      <option value={-1} >Select Option</option>
                      <option value={0}>ROCK</option>
                      <option value={1}>PAPER</option>
                      <option value={2}>SCISSORS</option>
                  </select>
              </div>
            </div>
            <Results refresh={playerMove} />
            <PastGames refresh={playerMove} />
    </>
    )

}

export default App;
