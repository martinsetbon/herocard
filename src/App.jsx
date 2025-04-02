import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HeroCard from './components/HeroCard';
import HeroForm from './components/HeroForm';

function App() {
  const [heroes, setHeroes] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const generateHero = () => {
    const randomGender = Math.random() < 0.5 ? "Male" : "Female";
    const randomName = ['Daddy Martin', 'Elie', 'Akim', 'Axeleration', 'Jason Parse', 'CSS (Chris Super Soldier)', 'Remyboy', 'Patrick', 'Emma', 'Ayaka', 'Shreken', 'Helena', 'Ayleen'][Math.floor(Math.random() * 13)];
    const randomRace = ['Human', 'Elf', 'Dwarf', 'Orc', 'Demon', 'Mermaid', 'Halfling'][Math.floor(Math.random() * 7)];
    const randomClass = ['Knight', 'Developer', 'Mage', 'Thief', 'Lancer', 'Pirate'][Math.floor(Math.random() * 6)];

    const getStatsThatSumInRange = () => {
      let stats;
      let total;
      do {
        stats = [0, 0, 0, 0].map(() => Math.floor(Math.random() * 14) + 6);
        total = stats.reduce((sum, stat) => sum + stat, 0);
      } while (total < 38 || total > 45);
      return stats;
    };

    const stats = getStatsThatSumInRange();

    const newHero = {
      name: randomName,
      gender: randomGender,
      race: randomRace,
      class: randomClass,
      stats: {
        strength: stats[0],
        intelligence: stats[1],
        agility: stats[2],
        charisma: stats[3],
      },
    };

    setHeroes([...heroes, newHero]);
  };

  const deleteHero = (index) => {
    setHeroes(heroes.filter((_, i) => i !== index));
  };

  const createHero = (e, heroName, heroGender, heroRace, heroClass, stats) => {
    e.preventDefault();

    if (!heroName || !heroGender || !heroRace || !heroClass) {
      alert("Please fill in all fields");
      return;
    }

    const newHero = {
      name: heroName,
      gender: heroGender,
      race: heroRace,
      class: heroClass,
      stats: {
        strength: stats[0],
        intelligence: stats[1],
        agility: stats[2],
        charisma: stats[3],
      },
    };

    setHeroes([...heroes, newHero]);
    setShowForm(false);
  };

  return (
    <div className="container text-center">
      <h1>My Hero Team</h1>

      {!showForm ? (
        <button className="btn btn-primary" onClick={() => setShowForm(true)}>
          Create new hero
        </button>
      ) : null}

      {showForm && <HeroForm createHero={createHero} />}

      <button className="btn btn-primary ms-5" onClick={generateHero}>Generate new hero</button>

      <div className="herocards mt-5">
        {heroes.map((hero, index) => (
          <HeroCard key={index} hero={hero} deleteHero={() => deleteHero(index)} />
        ))}
      </div>
    </div>
  );
}

export default App;
