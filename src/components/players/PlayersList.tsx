import { UserRound } from "lucide-react";
import OperationCard from "../operationCard/OperationCard";
import { Player } from "./PlayersPage";

interface PlayersListProps {
  players: Player[];
  onPlayerRemove: (index: number) => void;
}

const PlayersList = ({ players, onPlayerRemove }: PlayersListProps) => {
  return (
    <div className="mb-4 grid grid-cols-2 gap-4">
      {players.map((p, id) => (
        <div key={`player-list-${id}`}>
          <OperationCard
            icon={<UserRound className="h-4 w-4" />}
            title={p.name}
            checked={true}
            onCheckChange={(_c) => onPlayerRemove(p.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default PlayersList;
