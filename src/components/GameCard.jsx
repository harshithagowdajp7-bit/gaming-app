import './GameCard.css';

function GameCard({ game, isActive, onSelect }) {
  return (
    <button className={`game-card ${isActive ? 'active' : ''}`} onClick={onSelect}>
      <div>
        <h3>{game.title}</h3>
        <p>{game.description}</p>
      </div>
      {game.comingSoon && <span className="badge">Soon</span>}
    </button>
  );
}

export default GameCard;
