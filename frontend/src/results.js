import React, {useEffect, useState} from 'react';
import {getAllGames} from './api';

export default function GameResults({refresh}) {
    const [allGames, setAllGames] = useState([])
    const [results, setResults] = useState({player: 0, computer: 0, draw: 0})

    useEffect(() => {
        async function getData() {
            await getAllGames().then(response => {
                    setResults(({player: 0, computer: 0, draw: 0}))
                    const winnerList = response.data.map(game => {
                        if(game.winner === "computer") {
                            setResults((previousResults) => { return {...previousResults, computer: previousResults.computer + 1}})
                        }
                        else if(game.winner === "player") {
                            setResults((previousResults) => {
                                return {...previousResults, player: previousResults.player + 1}
                            })
                        }
                        else {
                            setResults((previousResults) => { return {...previousResults, draw: previousResults.draw + 1}})
                        }
                        return game.winner
                    });
                    setAllGames(winnerList);
                })
        }
        getData();
    }, [refresh])


    return allGames.length !== 0 && (
        <div>
            <h1>Total Display</h1>
            <table>
                <thead>
                    <tr>
                        <th> </th>
                        <th>Player</th>
                        <th>Computer</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Win</td>
                        <td>{results.player}</td>
                        <td>{results.computer}</td>

                    </tr>
                    <tr>
                        <td>Lose</td>
                        <td>{results.computer}</td>
                        <td>{results.player}</td>
                    </tr>
                    <tr>
                        <td>Draw</td>
                        <td>{results.draw}</td>
                        <td>{results.draw}</td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}