import React from 'react';
import '../App.css';
import Square from "./Square";
function App() {
  let [isxNext,setNext] = React.useState(true)
  let [values, setValues] = React.useState(Array(9).fill(null))
  let winner = calculateWinner(values);
  let status;
  if(winner) {
    status="Winner : " + winner
  }
  else {
    status="Next Player is : " +(isxNext? "X" : "O");
  }
  let clickevt = (i) => {
    if(values[i] || calculateWinner(values)) {
      return;
    }
    let newValues = values.slice();
    isxNext ? newValues[i]="X" : newValues[i]="O";
    setNext(!isxNext);
    setValues(newValues);
  }
  return <div className="forCenter">
    <div className="status">{status}</div>
    <div className="board-row"> 
      <Square value={values[0]} onSqClick = {() => clickevt(0)} />
      <Square value={values[1]} onSqClick = {() => clickevt(1)}/>
      <Square value={values[2]} onSqClick = {() => clickevt(2)}/>
    </div>
    <div className="board-row"> 
      <Square value={values[3]} onSqClick = {() => clickevt(3)}/>
      <Square value={values[4]} onSqClick = {() => clickevt(4)}/>
      <Square value={values[5]} onSqClick = {() => clickevt(5)}/>
    </div>
    <div className="board-row"> 
      <Square value={values[6]} onSqClick = {() => clickevt(6)}/>
      <Square value={values[7]} onSqClick = {() => clickevt(7)}/>
      <Square value={values[8]} onSqClick = {() => clickevt(8)}/>
    </div>
  </div>
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }  
}

export default App;