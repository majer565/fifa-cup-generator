import { Flag } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Team } from "./TeamsPage";

interface TeamsListProps {
  teams: Team[];
}

const TeamsList = ({ teams }: TeamsListProps) => {
  return (
    <div className="grid grid-cols-4 grid-rows-6 gap-4">
      {teams.map((m, id) => (
        <div key={`player-list-${id}`}>
          <Alert>
            <Flag className="h-4 w-4" />
            <AlertTitle className="px-3">{m.name}</AlertTitle>
            <AlertDescription>{`#${m.id} - OVR ${m.ovr}`}</AlertDescription>
          </Alert>
        </div>
      ))}
    </div>
  );
};

export default TeamsList;
