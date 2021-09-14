import Player from './Player'
import './PlayerList.css';


const PlayerList = ({players}) => (
  <div className="playersGrid">
    {players.map((player) => <Player player={player} key={player.id} />)}
  </div>
)

export default PlayerList