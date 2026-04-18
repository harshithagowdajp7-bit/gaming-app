# Gaming App

A simple React web application with a clean responsive UI and a home screen listing games like Tic Tac Toe.

## Project structure

- `package.json` - package and build scripts
- `vite.config.js` - Vite configuration for React
- `index.html` - app entry HTML
- `src/main.jsx` - React application bootstrap
- `src/App.js` - homepage and game selection layout
- `src/App.css` - app-wide styling
- `src/index.css` - base reset and body styles
- `src/components/GameCard.js` - game list card component
- `src/components/GameCard.css` - card styling
- `src/components/TicTacToe.js` - interactive Tic Tac Toe game
- `src/components/TicTacToe.css` - game board styling

## Setup and run

1. Open a terminal inside `d:\Harshitha_repose\gaming-app`
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

## Notes

- The homepage shows a list of games.
- Tic Tac Toe is fully playable.
- Additional game cards are present as coming soon placeholders.
