# React Tic-Tac-Toe 🎮

Hi there! 👋 I built this simple **Tic-Tac-Toe game** using **React + TypeScript + Vite**. It's a fun little project to practice React state management, TypeScript types, and some conditional rendering logic. 🚀

---

##  Features:
- 2-Player Mode (X vs O)
- Win detection (rows, columns, diagonals)
- Draw detection
- Reset Game functionality
- Built with modern stack: **React 19 + TypeScript + Vite**

---

## **How it works**

### 1️⃣ **State management**

I’m using React’s `useState()` hook to manage two states:

```tsx
const [board, setBoard] = useState(Array(9).fill(""));
const [isX, setIsX] = useState(true);
```

- **board:** An array of 9 strings `["", "", "", ...]` representing each square on the Tic-Tac-Toe board.
- **isX:** A boolean to track whose turn it is. `true` means it's X's turn, `false` means it's O's turn.

---

### 2️⃣ **Click logic**

When a player clicks a square:

```tsx
const handleClick = (index: number) => {
  if (board[index] || winner || isDraw) return; // prevent overwriting or clicking after game ends
  const newBoard = [...board];
  newBoard[index] = isX ? "X" : "O";
  setBoard(newBoard);
  setIsX(!isX);
};
```

- Prevents clicking on an already filled square.
- Fills the square with either `"X"` or `"O"` based on whose turn it is.
- Switches the turn after each valid click.

---

### 3️⃣ **Win detection**

I check all possible winning combinations (rows, columns, diagonals):

```tsx
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
```

- Checks if any player has won by comparing values in winning positions.

---

### 4️⃣ **Draw detection**

```tsx
const isDraw = board.every((cell: string) => cell !== "") && !winner;
```

- Declares a draw if all squares are filled and **no winner** is found.

---

### 5️⃣ **UI**

- A simple 3x3 grid created using CSS Grid inside JSX.
- Displays `"Winner: X"`, `"Winner: O"`, `"It's a Draw!"`, or `"Turn: X / O"` dynamically.

---

## 🛠 **Tech stack**

- ⚛️ React 19
- ⌨️ TypeScript
- ⚡ Vite
- 💄 Inline CSS for styling

---

## 🚀 **How to run**

1. Clone the repo:
   ```bash
   git clone https://github.com/gagand29/React-Tic-Tac-Toe.git
   cd React-Tic-Tac-Toe
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run development server:
   ```bash
   npm run dev
   ```

4. Visit:
   ```
   http://localhost:5173
   ```

---

## 🤝 **Contribute or Play Around**

Feel free to fork, download, or edit this project!  
You can add:
- AI opponent 
- Animation on winning cells 
- Scoreboard 

---

Thanks for checking out my project! 🙌  
— **Made with ❤️ by Me**

```