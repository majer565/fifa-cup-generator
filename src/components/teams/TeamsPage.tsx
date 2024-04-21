import { StageContext } from "@/App";
import { AVAILABLE_TEAMS } from "@/assets/teams";
import { useContext, useState } from "react";
import { Button } from "../ui/button";
import TeamsList from "./TeamsList";

export interface Team {
  id: number;
  name: string;
  ovr: number;
}

interface TeamsPageProps {
  teamsUpdate: React.Dispatch<React.SetStateAction<Team[]>>;
}

const TeamsPage = ({ teamsUpdate }: TeamsPageProps) => {
  const stageContext = useContext(StageContext);
  const [teams, setTeams] = useState<Team[]>(AVAILABLE_TEAMS);

  const handleTeamsAdd = (team: Team) => {
    const newTeams = [...teams];
    newTeams.push(team);
    setTeams(newTeams);
  };

  const handleTeamRemove = (id: number) => {
    const newTeams = teams.filter((t) => t.id !== id);
    setTeams(newTeams);
  };

  const handleSaveTeams = () => {
    teamsUpdate(teams);
    stageContext?.setStage("CLASSIFICATION");
  };

  const checkIfTeamsPresent = (id: number) => {
    const index = teams.findIndex((t) => t.id === id);
    return index === -1 ? false : true;
  };

  return (
    <div className="flex flex-col gap-4">
      <TeamsList onTeamRemove={handleTeamRemove} onTeamAdd={handleTeamsAdd} isChecked={checkIfTeamsPresent} />
      <div>
        <Button className="w-full" variant="outline" onClick={handleSaveTeams}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default TeamsPage;
