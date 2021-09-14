import "./StatTotals.css";

const StatTotals = ({ totalWages, totalGames, totalGoals }) => (
  <div className="statHolders">
    <div className="stat">
      <div className="statLabel">Total Wages -</div>
      <div className="statValue">{totalWages}</div>
    </div>
    <div className="stat">
      <div className="statLabel">Total Games Played -</div>
      <div className="statValue">{totalGames}</div>
    </div>
    <div className="stat">
      <div className="statLabel">Total Goals Scored -</div>
      <div className="statValue">{totalGoals}</div>
    </div>
  </div>
);

export default StatTotals;