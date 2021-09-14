import { useState, useMemo, useEffect } from "react";
import { getAllPlayers } from "./api";
import "./App.css";
import Layout from "./components/Layout";
import PlayerList from "./components/PlayerList";

const App = () => {
  const [playerData, setPlayerData] = useState([]);
  const [filter, setFilter] = useState("all");
  const [error, setError] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getAllPlayers();
        setPlayerData(response);
      } catch (error) {
        setError(true);
      }
    };
    getData();
  }, []);

  const playerPositions = useMemo(
    () =>
      playerData.reduce((positions, player) => {
        positions[player.position] = true;
        return positions;
      }, {}),
    [playerData]
  );

  const filteredPlayers = useMemo(
    () =>
      playerData.filter((player) =>
        filter === "all" ? true : player.position === filter
      ),
    [playerData, filter]
  );

  const playerStats = useMemo(
    () =>
      filteredPlayers.reduce(
        (totals, currentPlayer) => {
          totals.totalWages += currentPlayer.wages;
          totals.totalGames += currentPlayer.games_played;
          totals.totalGoals += currentPlayer.goals_scored;
          return totals;
        },
        { totalWages: 0, totalGames: 0, totalGoals: 0 }
      ),
    [filteredPlayers]
  );

  return (
    <Layout playerStats={playerStats}>
      {error ? (
        <div className="error">Error Loading Players</div>
      ) : (
        <>
          <div>
            <label>Filter by position: </label>
            <select onChange={(e) => setFilter(e.target.value)}>
              <option value="all">Show All</option>
              {Object.keys(playerPositions).map((position) => (
                <option key={position}>{position}</option>
              ))}
            </select>
          </div>
          <PlayerList players={filteredPlayers} />
        </>
      )}
    </Layout>
  );
};

export default App;
