import "./App.css";
import { useEffect, useState, useMemo } from "react";
import Layout from "./components/Layout";
import PlayerList from "./components/PlayerList";
import { getAllPlayers } from "./api";

//  TODO: Determine positions dynamically from API response
const positions = ["GK", "RB", "LB", "CB", "CM", "LM", "ST", "LW", "FW"];

function App() {
  const [error, setError] = useState(false);
  const [playerData, setPlayerData] = useState([]);
  const [positionFilter, setPositionFilter] = useState("all");

  useEffect(() => {
    const getData = async() => {
    try {
      const response = await getAllPlayers(positionFilter);
      setPlayerData(response);
    } catch (error) {
      setError(true);
    }
  };
  getData();
  }, [positionFilter]);

  const playerStats = useMemo(
    () =>
      playerData.reduce(
        (totals, currentPlayer) => {
          totals.totalWages += currentPlayer.wages;
          totals.totalGames += currentPlayer.games_played;
          totals.totalGoals += currentPlayer.goals_scored;
          return totals;
        },
        { totalWages: 0, totalGames: 0, totalGoals: 0 }
      ),
    [playerData]
  );

  return (
    <Layout playerStats={playerStats}>
        {error ? (
        <div className="error">Error Loading Players</div>
      ) : (
        <>
      <div>
        <label>Filter by position: </label>
        <select
          value={positionFilter}
          onChange={(e) => setPositionFilter(e.target.value)}
        >
          <option value="all">Show All</option>
          {positions.map((position) => (
            <option value={position} key={`${position}Option`}>{position}</option>
          ))}
        </select>
      </div>
      <PlayerList players={playerData} />
      </>)}
    </Layout>
  );
}

export default App;
