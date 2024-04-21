import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";
import { Bracket } from "./BracketPage";

interface BracketCardProps {
  playerA: Bracket;
  playerB: Bracket;
}

const BracketCard = ({ playerA, playerB }: BracketCardProps) => {
  return (
    <Card>
      <CardContent className="flex flex-col p-4">
        <div className="flex justify-between">
          <div>{playerA.player}</div>
          <div>{playerA.team}</div>
        </div>
        <Separator className="my-1" />
        <div className="flex justify-between">
          <div>{playerB.player}</div>
          <div>{playerB.team}</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BracketCard;
