import { StageContext } from "@/App";
import { useContext, useState } from "react";
import BracketPage from "../bracket/BracketPage";
import ClassificationPage, { Classification } from "../classification/ClassificationPage";
import CupTitle from "../cupTitle/CupTitle";
import InitialCupPage from "../initialCup/InitialCupPage";
import PlayersPage, { Player } from "../players/PlayersPage";
import TeamsPage, { Team } from "../teams/TeamsPage";

const RootPage = () => {
  const stageContext = useContext(StageContext);
  const [cupTitle, setCupTitle] = useState("");
  const [players, setPlayers] = useState<Player[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);
  const [classification, setClassification] = useState<Classification[]>([]);

  if (stageContext?.stage === "PLAYERS")
    return (
      <div className="my-40 gap-2 max-w-1/2 flex flex-col">
        <CupTitle title={cupTitle} />
        <PlayersPage playersUpdate={setPlayers} />
      </div>
    );

  if (stageContext?.stage === "TEAMS")
    return (
      <div className="my-10 gap-2 flex flex-col">
        <CupTitle title={cupTitle} />
        <TeamsPage teamsUpdate={setTeams} />
      </div>
    );

  if (stageContext?.stage === "CLASSIFICATION")
    return (
      <div className="my-10 gap-2 flex flex-col">
        <CupTitle title={cupTitle} />
        <ClassificationPage onClassification={setClassification} players={players} />
      </div>
    );

  if (stageContext?.stage === "BRACKETS")
    return (
      <div className="my-10 gap-2 flex flex-col">
        <CupTitle title={cupTitle} />
        <BracketPage classification={classification} teams={teams} players={players} />
      </div>
    );

  return (
    <div className="my-40 transition-opacity duration-700">
      <InitialCupPage setCupTitle={setCupTitle} />
    </div>
  );
};

export default RootPage;
