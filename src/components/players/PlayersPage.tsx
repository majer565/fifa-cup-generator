import { StageContext } from "@/App";
import { useContext, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import PlayersList from "./PlayersList";

export interface Player {
  id: number;
  name: string;
}

interface PlayersPageProps {
  playersUpdate: React.Dispatch<React.SetStateAction<Player[]>>;
}

const PlayersPage = ({ playersUpdate }: PlayersPageProps) => {
  const stageContext = useContext(StageContext);
  const [players, setPlayers] = useState<Player[]>([]);
  const [input, setInput] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handlePlayersUpdate = (player: string) => {
    if (player.length > 0) {
      setPlayers((prev) => [...prev, { id: prev.length, name: player }]);
      setInput("");
    }
  };

  const handlePlayerRemove = (id: number) => {
    const newPlayers = players.filter((p) => p.id !== id);
    setPlayers(newPlayers);
  };

  const handleSavePlayers = () => {
    playersUpdate(players);
    stageContext?.setStage("TEAMS");
  };

  return (
    <div className="min-w-[35rem]">
      <PlayersList players={players} onPlayerRemove={handlePlayerRemove} />
      <div>
        <Input placeholder="Enter player name" value={input} onChange={handleInputChange} />
        <div className="my-3 flex justify-between">
          <Button onClick={() => handlePlayersUpdate(input)}>Add Player</Button>
          <Button variant="outline" onClick={handleSavePlayers}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PlayersPage;
