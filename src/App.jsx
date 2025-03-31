import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HeroCard from './components/HeroCard';
import HeroForm from './components/HeroForm';

function App() {
  // State to store the list of hero cards
  const [heroes, setHeroes] = useState([]);

  // State to control form visibility
  const [showForm, setShowForm] = useState(false);

  // Generate random hero logic
  const generateHero = () => {
    const randomName = ['Daddy Martin', 'Elie', 'Akim', 'Axeleration', 'Jason Parse', 'CSS (Chris Super Soldier)', 'Remyboy', 'Patrick', 'Emma', 'Ayaka', 'Shreken', 'Helena', 'Ayleen'][Math.floor(Math.random() * 13)];
    const randomRace = ['Human', 'Elf', 'Dwarf', 'Orc', 'Demon', 'Mermaid', 'Halfling'][Math.floor(Math.random() * 7)];
    const randomClass = ['Knight', 'Developer', 'Mage', 'Thief', 'Lancer', 'Pirate'][Math.floor(Math.random() * 6)];

    const getStatsThatSumInRange = () => {
      let stats = [0, 0, 0, 0];
      let total = 0;
      let minTotal = 38;
      let maxTotal = 45;

      // Generate stats with a minimum of 6 per stat
      while (total < minTotal || total > maxTotal) {
        stats = stats.map(() => Math.floor(Math.random() * 14) + 6); // Random number between 6 and 19
        total = stats.reduce((sum, stat) => sum + stat, 0);
      }

      return stats;
    };

    const stats = getStatsThatSumInRange();

    const newHero = {
      name: randomName,
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

  // Function to delete a hero by index
  const deleteHero = (index) => {
    const updatedHeroes = heroes.filter((hero, i) => i !== index);
    setHeroes(updatedHeroes);
  };

  // Function to create hero from form
  const createHero = (e, heroName, heroClass, heroRace, stats) => {
    e.preventDefault(); // Prevent form submission

    if (!heroName || !heroClass || !heroRace) {
      alert("Please fill in all fields");
      return;
    }

    const newHero = {
      name: heroName,
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
    setShowForm(false); // Hide the form after submission
  };

  return (
    <div className="container text-center">
      <h1>My Hero Team</h1>

      {/* Button to toggle the form visibility */}
      {!showForm ? (
        <button className="btn btn-primary" onClick={() => setShowForm(true)}>
          Create new hero
        </button>
      ) : null}

      {/* Render HeroForm component when showForm is true */}
      {showForm && <HeroForm createHero={createHero} rerollStats={() => {}} />}

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
