import  { useState } from "react";

export default function App() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [isX, setIsX] = useState(true);

  const handleClick = (index: number) => {
    if (board[index] || checkWinner(board) || isDraw) return;

    const newBoard = [...board];
    newBoard[index] = isX ? "X" : "O";
    setBoard(newBoard);
    setIsX(!isX);
  };

  const checkWinner = (b: string[]) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let [a, b1, c] of lines) {
      if (b[a] && b[a] === b[b1] && b[a] === b[c]) return b[a];
    }
    return null;
  };

  const winner = checkWinner(board); 

  const isDraw = board.every((cell:string) => cell !== "") && !winner;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>
        {winner 
          ? `Winner: ${winner}` 
          : isDraw 
            ? "It's a Draw!" 
            : `Turn: ${isX ? "X" : "O"}`
        }
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 100px)", gap: "5px", justifyContent: "center" }}>
      {
        board.map((val,idx)=>(
          <button 
          key={idx}
          onClick={()=>handleClick(idx)}
          style={{width:"100px", height:"100px", fontSize:"24px"}}
          >
            {val}
            </button>
        ))
      }
        </div>

      <button
      style={{marginTop: "20px", padding: "10px 20px"}}
      onClick={()=>{setBoard(Array(9).fill(""));
    setIsX(true);}}
      >
        reset
        </button>

    </div>
  );
}
