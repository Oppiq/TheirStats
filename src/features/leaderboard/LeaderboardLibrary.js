import LeaderboardGoals from "./LeaderboardGoals";
import LeaderboardAssists from "./LeaderboardAssists";
import LeaderboardPoints from "./LeaderboardPoints";

const LeaderboardLibrary = () => {
  return (
    <>
      <LeaderboardGoals bucket="Goals" season="24" />
      <LeaderboardAssists bucket="Assists" season="24" />
      <LeaderboardPoints bucket="Points" season="24" />
    </>
  );
};

export default LeaderboardLibrary;
