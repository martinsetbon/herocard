import 'bootstrap/dist/css/bootstrap.min.css';
import chardefault from '../../public/images/chardefault.webp';

function HeroCard({ hero, deleteHero  }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={chardefault} className="card-img-top img-size border-bottom border-black" alt="Character" />
      <div className="card-body">
        <h5 className="card-title">{hero.name}</h5>
        <p className="card-text">
          Race: {hero.race}
          <br />
          Class: {hero.class}
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Strength: {hero.stats.strength}</li>
        <li className="list-group-item">Intelligence: {hero.stats.intelligence}</li>
        <li className="list-group-item">Agility: {hero.stats.agility}</li>
        <li className="list-group-item">Charisma: {hero.stats.charisma}</li>
      </ul>
      <button className="btn btn-danger" onClick={deleteHero}>Delete Hero</button>
    </div>
  );
}

export default HeroCard;
