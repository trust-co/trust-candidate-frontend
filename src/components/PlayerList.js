import "./PlayerList.css";
import Player from "./Player";

const PlayerList = ({ players }) => (
  <div className="playersGrid">
    {players.map((player) => (
      <Player player={player} key={`number${player.squad_number}Info`} />
    ))}
  </div>
);

export default PlayerList;
