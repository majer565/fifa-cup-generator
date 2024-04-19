import { StageContext } from "@/App";
import { useContext, useState } from "react";
import CupTitle from "../cupTitle/CupTitle";
import InitialCupPage from "../initialCup/InitialCupPage";
import PlayersPage, { Player } from "../players/PlayersPage";

const RootPage = () => {
  const stageContext = useContext(StageContext);
  const [cupTitle, setCupTitle] = useState("");
  const [players, setPlayers] = useState<Player[]>([]);

  if (stageContext?.stage === "PLAYERS")
    return (
      <div className="my-40 gap-2 max-w-1/2 flex flex-col">
        <CupTitle title={cupTitle} />
        <PlayersPage playersUpdate={setPlayers} />
      </div>
    );

  if (stageContext?.stage === "TEAMS")
    return (
      <div className="my-40 w-[35rem] gap-2 flex flex-col">
        <CupTitle title={cupTitle} />
        Teams
      </div>
    );

  return (
    <div className="my-40 transition-opacity duration-700">
      <InitialCupPage setCupTitle={setCupTitle} />
    </div>
  );
};

export default RootPage;
