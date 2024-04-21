import { Player } from "../players/PlayersPage";
import ClassificationCard from "./ClassificationCard";

interface ClassificationListProps {
  players: Player[];
  onRankUpdate: (playerId: number, rank: number) => void;
  getPlayerRank: (playerId: number) => string | undefined;
}

const ClassificationList = ({ players, onRankUpdate, getPlayerRank }: ClassificationListProps) => {
  return (
    <div className="w-[40rem]">
      {players.map((p, id) => (
        <div key={`player-list-${id}`} className="py-2">
          <ClassificationCard
            name={p.name}
            playersNumber={players.length}
            value={getPlayerRank(p.id)}
            onValueChange={(v) => onRankUpdate(p.id, parseInt(v))}
          />
        </div>
      ))}
    </div>
  );
};

export default ClassificationList;
