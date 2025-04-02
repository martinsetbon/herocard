import 'bootstrap/dist/css/bootstrap.min.css';

function HeroCard({ hero, deleteHero }) {
  const gender = hero?.gender?.toLowerCase() || "unknown";
  const race = hero?.race?.toLowerCase() || "unknown";
  const heroClass = hero?.class?.toLowerCase() || "unknown"; // Renamed `class` to `heroClass`

  const imageName = `${gender}_${race}_${heroClass}.jpg`; // Using `heroClass` here
  const imagePath = `/images/heroes/${imageName}`;
  const fallbackImage = "/images/chardefault.webp";

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img
        src={imagePath}
        // onError={(e) => (e.target.src = fallbackImage)}
        className="card-img-top img-size border-bottom border-black"
        alt={hero.name}
      />
      <div className="card-body">
        <h5 className="card-title">{hero.name}</h5>
        <p className="card-text">
          {hero.gender} | Race: {hero.race} | Class: {hero.class}
        </p>
        <p className="card-text">
          Strength: {hero.stats.strength}, Intelligence: {hero.stats.intelligence}, Agility: {hero.stats.agility}, Charisma: {hero.stats.charisma}
        </p>
      </div>
      <button className="btn btn-danger" onClick={deleteHero}>Delete Hero</button>
    </div>
  );
}

export default HeroCard;
