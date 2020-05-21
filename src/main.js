import React from 'react'
import Board from './components/Board'
import Card from './components/Card'
import './main.css'

function Main(){
    return(
        <div className="flexbox">
        <Board id="board-1" className="board">
            <Card id="card-1" className="card" draggable="true">
                    <p>Card one</p>
            </Card>
        </Board>
        <Board id="board-2" className="board">
            <Card id="card-2" className="card" draggable="true">
                <p>Card two</p>
            </Card>
        </Board>
        </div>
      
    )
}

export default Main