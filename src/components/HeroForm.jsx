import { useState } from 'react';

function HeroForm({ createHero }) {
  const [heroName, setHeroName] = useState('');
  const [heroGender, setHeroGender] = useState('');
  const [heroClass, setHeroClass] = useState('');
  const [heroRace, setHeroRace] = useState('');
  const [stats, setStats] = useState([0, 0, 0, 0]);

  const classList = ['Knight', 'Developer', 'Mage', 'Thief', 'Lancer', 'Pirate'];
  const raceList = ['Human', 'Elf', 'Dwarf', 'Orc', 'Demon', 'Mermaid', 'Halfling'];
  const genderList = ['Male', 'Female'];

  const rerollStats = () => {
    let newStats;
    let total;
    do {
      newStats = [0, 0, 0, 0].map(() => Math.floor(Math.random() * 14) + 6);
      total = newStats.reduce((sum, stat) => sum + stat, 0);
    } while (total < 38 || total > 45);

    setStats(newStats);
  };

  return (
    <div className="mb-5 border p-3 bg-secondary-subtle">
      <h2>Create New Hero</h2>
      <form onSubmit={(e) => createHero(e, heroName, heroGender, heroRace, heroClass, stats)}>
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
          <label className="form-label">Gender</label>
          <select className="form-select" value={heroGender} onChange={(e) => setHeroGender(e.target.value)}>
            <option value="">Choose gender</option>
            {genderList.map((g, index) => <option key={index} value={g}>{g}</option>)}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Race</label>
          <select className="form-select" value={heroRace} onChange={(e) => setHeroRace(e.target.value)}>
            <option value="">Choose Race</option>
            {raceList.map((r, index) => <option key={index} value={r}>{r}</option>)}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Class</label>
          <select className="form-select" value={heroClass} onChange={(e) => setHeroClass(e.target.value)}>
            <option value="">Choose Class</option>
            {classList.map((r, index) => <option key={index} value={r}>{r}</option>)}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Stats</label>
          <p>Strength: {stats[0]}, Intelligence: {stats[1]}, Agility: {stats[2]}, Charisma: {stats[3]}</p>
          <button type="button" className="btn btn-warning" onClick={rerollStats}>Reroll Stats</button>
        </div>

        <button type="submit" className="btn btn-success">Create Hero</button>
      </form>
    </div>
  );
}

export default HeroForm;
