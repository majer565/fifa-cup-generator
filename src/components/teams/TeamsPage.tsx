import { StageContext } from "@/App";
import { AVAILABLE_TEAMS } from "@/assets/teams";
import { useContext, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
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
  const [input, setInput] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleTeamsUpdate = (teamId: string) => {
    const id = Number(teamId);
    if (id) {
      const newTeams = teams.filter((t) => t.id !== id);
      setTeams(newTeams);
      setInput("");
    }
  };

  const handleSaveTeams = () => {
    teamsUpdate(teams);
    stageContext?.setStage("CLASSIFICATION");
  };

  return (
    <div className="flex flex-col gap-4">
      <TeamsList teams={teams} />
      <div>
        <Input placeholder="Enter team id" value={input} onChange={handleInputChange} />
        <div className="my-3 flex justify-between">
          <Button onClick={() => handleTeamsUpdate(input)}>Remove</Button>
          <Button variant="outline" onClick={handleSaveTeams}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TeamsPage;
