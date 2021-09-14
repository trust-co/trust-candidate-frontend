import logo from "../assets/afcRichmondLogo.png";
import "./Header.css";
import StatTotals from "./StatTotals";

const Header = ({ playerStats }) => (
  <header className="header">
    <img src={logo} alt="teamLogo" />
    <div className="teamName">
      AFC Richmond<div className="subhead">Player Roster</div>
    </div>
    <StatTotals
      totalWages={playerStats.totalWages}
      totalGoals={playerStats.totalGoals}
      totalGames={playerStats.totalGames}
    />
  </header>
);

export default Header;