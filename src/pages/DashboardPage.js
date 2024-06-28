import TeamSelector from "../features/grid/TeamSelector";
import StatsGrid from "../features/grid/StatsGrid";
import { useState } from "react";

const DashboardPage = () => {
  const [team, setTeam] = useState("ANA");

  return (
    <div>
      <h1>Hi, I am a dashboard</h1>
      <TeamSelector updateTeam={setTeam} />
      <StatsGrid team={team} />
    </div>
  );
};

export default DashboardPage;
