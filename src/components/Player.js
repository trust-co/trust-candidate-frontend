import "./Player.css";

const Player = ({ player }) => (
  <div className="playerHolder">
    <div className="playerInfoFlex">
      <div className="playerDetails">
        <span className="playerName">
          {player.first_name} {player.last_name}
        </span>
        <span className="playerDetail">#{player.squad_number}</span>
        <span className="playerDetail">{player.position}</span>
      </div>
      <div className="playerStatsGrid">
        <div className="playerStat">Games Played: <span className="playerStatDetail">{player.games_played}</span></div>
        <div className="playerStat">Goals Scored: <span className="playerStatDetail">{player.goals_scored}</span></div>
        {/* TODO: Format this number to correctly display as currency */}
        <div className="playerStat">Wages: <span className="playerStatDetail">{player.wages}</span></div>
        <div className="playerStat">
          {player.active ? (
            <span className="playerStatDetail playerActive">ACTIVE</span>
          ) : (
            <span className="playerStatDetail playerInactive">INACTIVE</span>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default Player