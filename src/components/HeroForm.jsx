import { useState } from 'react';

function HeroForm({ createHero, rerollStats }) {
  const [heroName, setHeroName] = useState('');
  const [heroClass, setHeroClass] = useState('');
  const [heroRace, setHeroRace] = useState('');
  const [stats, setStats] = useState([0, 0, 0, 0]);

  const classList = ['Knight', 'Developer', 'Mage', 'Thief', 'Lancer', 'Pirate'];
  const raceList = ['Human', 'Elf', 'Dwarf', 'Orc', 'Demon', 'Mermaid', 'Halfling'];

  // Handle stats reroll
  const handleRerollStats = () => {
    let newStats = [0, 0, 0, 0];
    let total = 0;

    // Generate stats such that each stat is between 6 and 19 and the sum is between 38 and 45
    while (total < 38 || total > 45) {
      newStats = newStats.map(() => Math.floor(Math.random() * 14) + 6); // Random between 6 and 19
      total = newStats.reduce((sum, stat) => sum + stat, 0);
    }

    setStats(newStats);
  };

  return (
    <div className="mb-5 border p-3 bg-secondary-subtle">
      <h2>Create New Hero</h2>
      <form onSubmit={(e) => createHero(e, heroName, heroClass, heroRace, stats)}>
        <div className="mb-3">
          <label className="form-label">Hero Name</label>
          <input
            type="text"
            className="form-control"
            value={heroName}
            onChange={(e) => setHeroName(e.target.value)}
            placeholder="Enter hero name"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Class</label>
          <select
            className="form-select"
            value={heroClass}
            onChange={(e) => setHeroClass(e.target.value)}
          >
            <option value="">Choose Class</option>
            {classList.map((c, index) => (
              <option key={index} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Race</label>
          <select
            className="form-select"
            value={heroRace}
            onChange={(e) => setHeroRace(e.target.value)}
          >
            <option value="">Choose Race</option>
            {raceList.map((r, index) => (
              <option key={index} value={r}>{r}</option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <h4>Stats</h4>
          <ul>
            <li className="list-group-item">Strength: {stats[0]}</li>
            <li className="list-group-item">Intelligence: {stats[1]}</li>
            <li className="list-group-item">Agility: {stats[2]}</li>
            <li className="list-group-item">Charisma: {stats[3]}</li>
          </ul>
          <button type="button" className="btn btn-warning" onClick={handleRerollStats}>Roll Stats</button>
        </div>

        <button type="submit" className="btn btn-success">Create Hero</button>
      </form>
    </div>
  );
}

export default HeroForm;
