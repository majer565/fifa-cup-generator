import { StageContext } from "@/App";
import { useContext, useState } from "react";
import { Player } from "../players/PlayersPage";
import { Button } from "../ui/button";
import ClassificationList from "./ClassificationList";

export interface Classification {
  rank: number;
  playerId: number;
}

interface ClassificationPageProps {
  onClassification: React.Dispatch<React.SetStateAction<Classification[]>>;
  players: Player[];
}

const ClassificationPage = ({ players, onClassification }: ClassificationPageProps) => {
  const stageContext = useContext(StageContext);
  const [classification, setClassification] = useState<Classification[]>([]);

  const handlePlayerRankFind = (id: number) => {
    const index = classification.findIndex((c) => c.playerId === id);
    return index !== -1 ? String(classification[index].rank) : undefined;
  };

  const handleRankUpdate = (id: number, rank: number) => {
    const index = classification.findIndex((c) => c.playerId === id);
    if (index === -1) {
      const newClass = [...classification];
      newClass.push({ playerId: id, rank });
      setClassification(newClass);
    } else {
      setClassification((prev) => [...prev, { playerId: id, rank: rank }]);
    }
  };

  const handleSaveClass = () => {
    onClassification(classification);
    stageContext?.setStage("BRACKETS");
  };

  return (
    <div className="flex flex-col gap-4">
      <ClassificationList players={players} onRankUpdate={handleRankUpdate} getPlayerRank={handlePlayerRankFind} />
      <Button variant="outline" onClick={handleSaveClass}>
        Save
      </Button>
    </div>
  );
};

export default ClassificationPage;
