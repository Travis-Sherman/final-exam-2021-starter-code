import React, {useEffect, useState} from 'react';

import {getAllGames} from './api';


export default function PastGames({refresh}) {
  const [allGames, setAllGames] = useState([])
  const changeToValue = (move) => {
  if(move === 0) 
  return "RocK"; 
  if(move === 1)
  return "Paper";
  if(move === 2)
  return "Scissors";
  }
  useEffect(() => {
      async function getData() {
          await getAllGames.then(response => {
            const winnerList = response.data.map(game => {
              return {
                  winner: game.winner,
                  player: changeToValue(game.moves.player),
                  computer: changeToValue(game.moves.computer),
                  playedAt: (game.playedAt).format("YYYY-MM-DD HH:mm:ss")
              }
            });
            setAllGames(winnerList.reverse());
              })
      }
      getData();
  }, [refresh])
  
  
  return allGames.length !== 0 && (
      <div>
          <h1>Game History</h1>
          <table>
              <thead>
                  <tr>
                      <th>👑 Winner</th>
                      <th>Player Move</th>
                      <th>Computer Move</th>
                      <th>Played At</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      allGames.map(game => {
                          return (
                              <tr key={Math.random()}>
                                  <td>{game.winner}</td>
                                  <td>{game.player}</td>
                                  <td>{game.computer}</td>
                                  <td>{game.playedAt}</td>
                              </tr>
                          )
  
                      })
                  }
  
              </tbody>
          </table>
      </div>
  )
}