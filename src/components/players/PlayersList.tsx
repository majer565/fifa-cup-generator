import { UserRound, X } from "lucide-react";
import { Alert, AlertTitle } from "../ui/alert";
import { Button } from "../ui/button";
import { Player } from "./PlayersPage";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface PlayersListProps {
  players: Player[];
  onPlayerRemove: (index: number) => void;
}

const PlayersList = ({ players, onPlayerRemove }: PlayersListProps) => {
  return (
    <div className="mb-4 grid grid-cols-2 gap-4 grid-rows-4">
      {players.map((p, id) => (
        <div key={`player-list-${id}`}>
          <Alert>
            <div className="flex justify-between items-center">
              <div className="flex justify-between max-w-1/2">
                <UserRound className="h-4 w-4" />
                <AlertTitle className="pl-3">{p.name}</AlertTitle>
              </div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" onClick={() => onPlayerRemove(p.id)}>
                      <X className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Remove</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </Alert>
        </div>
      ))}
    </div>
  );
};

export default PlayersList;
