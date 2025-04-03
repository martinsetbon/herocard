import 'bootstrap/dist/css/bootstrap.min.css';

function HeroCard({ hero, deleteHero }) {
  const gender = hero?.gender?.toLowerCase() || "unknown";
  const race = hero?.race?.toLowerCase() || "unknown";
  const heroClass = hero?.class?.toLowerCase() || "unknown"; // Renamed `class` to `heroClass`

  const imageName = `${gender}_${race}_${heroClass}.jpg`; // Using `heroClass` here
  const imagePath = `${import.meta.env.BASE_URL}images/heroes/${imageName}`;
  const fallbackImage = "/images/chardefault.webp";

  return (
    <div className="card shadow-sm p-2" style={{ width: '18rem' }}>
      <img
        src={imagePath}
        // onError={(e) => (e.target.src = fallbackImage)}
        className="card-img-top img-size border-bottom border-black"
        alt={hero.name}
      />
      <div className="card-body">
        <h5 className="card-title">{hero.name}</h5>
        <p className="card-text">
          {hero.gender} - {hero.race} - {hero.class}
        </p>
        <ul class="list-group list-group-flush">
      <li class="list-group-item">Strength: {hero.stats.strength}</li>
      <li class="list-group-item">Intelligence: {hero.stats.intelligence}</li>
      <li class="list-group-item">Agility: {hero.stats.agility}</li>
      <li class="list-group-item">Charisma: {hero.stats.charisma}</li>
      </ul>
      </div>
      <button className="btn btn-danger" onClick={deleteHero}>Delete Hero</button>
    </div>
  );
}

export default HeroCard;
