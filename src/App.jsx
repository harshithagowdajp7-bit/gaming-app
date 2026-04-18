import { useState } from 'react';
import GameCard from './components/GameCard.jsx';
import TicTacToe from './components/TicTacToe.jsx';
import './App.css';

const games = [
  {
    id: 'tic-tac-toe',
    title: 'Tic Tac Toe',
    description: 'Classic 3x3 strategy game. Play against yourself and aim to get three in a row.',
  },
  {
    id: 'memory-match',
    title: 'Memory Match',
    description: 'A simple card-matching game to test your memory skills.',
    comingSoon: true,
  },
  {
    id: 'snake',
    title: 'Snake',
    description: 'Grow your snake by collecting items while avoiding walls and yourself.',
    comingSoon: true,
  },
];

function App() {
  const [selectedGame, setSelectedGame] = useState('tic-tac-toe');

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <p className="tagline">React Gaming Hub</p>
          <h1>Fun games in one place</h1>
        </div>
      </header>

      <main className="content">
        <section className="sidebar">
          <h2>Games</h2>
          <div className="game-grid">
            {games.map((game) => (
              <GameCard
                key={game.id}
                game={game}
                isActive={selectedGame === game.id}
                onSelect={() => setSelectedGame(game.id)}
              />
            ))}
          </div>
        </section>

        <section className="play-area">
          {selectedGame === 'tic-tac-toe' ? (
            <TicTacToe />
          ) : (
            <div className="placeholder-card">
              <h2>Coming Soon</h2>
              <p>This game is under development. Check back later!</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
