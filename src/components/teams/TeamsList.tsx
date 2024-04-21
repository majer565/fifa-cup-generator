import { AVAILABLE_TEAMS } from "@/assets/teams";
import { CheckedState } from "@radix-ui/react-checkbox";
import { Flag } from "lucide-react";
import OperationCard from "../operationCard/OperationCard";
import { Team } from "./TeamsPage";

interface TeamsListProps {
  isChecked: (id: number) => boolean;
  onTeamRemove: (id: number) => void;
  onTeamAdd: (team: Team) => void;
}

const TeamsList = ({ isChecked, onTeamAdd, onTeamRemove }: TeamsListProps) => {
  const handleCheckChange = (checked: CheckedState, team: Team) => {
    console.log("check: ", checked)
    if (checked === false) onTeamRemove(team.id);
    if (checked === true) onTeamAdd(team);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-6 gap-4">
      {AVAILABLE_TEAMS.map((m, id) => (
        <div key={`player-list-${id}`}>
          <OperationCard
            icon={<Flag className="h-4 w-4" />}
            title={m.name}
            desc={`#${m.id} - OVR ${m.ovr}`}
            checked={isChecked(m.id)}
            onCheckChange={(c) => handleCheckChange(c, m)}
          />
        </div>
      ))}
    </div>
  );
};

export default TeamsList;
