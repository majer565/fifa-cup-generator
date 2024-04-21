import { useState } from "react";
import { MoonLoader } from "react-spinners";
import { Classification } from "../classification/ClassificationPage";
import { Player } from "../players/PlayersPage";
import { Team } from "../teams/TeamsPage";
import { Button } from "../ui/button";
import BracketCard from "./BracketCard";

export interface Bracket {
  player: string;
  team: string;
}

interface Duel {
  playerA: Bracket;
  playerB: Bracket;
}

interface BracketPageProps {
  classification: Classification[];
  teams: Team[];
  players: Player[];
}

const BracketPage = (props: BracketPageProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [brackets, setBrackets] = useState<Bracket[]>([]);
  const [duel, setDuels] = useState<Duel[]>([]);
  console.log("C", props.classification)
  console.log("t", props.teams)
  console.log("p", props.players)

  const onGenerateClick = () => {
    setLoading(true);
    drawTeams();
    drawBracket();
    setLoading(false);
  };

  const drawBr = (brackets: Bracket[], i: number) => {
    const index1 = Math.floor(Math.random() * 4) + 4 * i;
    const index2 = Math.floor(Math.random() * 4) + 4 * i;
    console.log({ playerA: brackets[index1], playerB: brackets[index2] });

    if (index1 === index2) drawBr(brackets, i);
    return { playerA: brackets[index1], playerB: brackets[index2] };
  };

  const drawBracket = () => {
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        const duel = drawBr(brackets, i);
        setDuels((prev) => [...prev, duel]);
      }
    }
  };

  const getPlayerById = (id: number) => {
    return props.players.find((p) => p.id === id);
  };

  const sortTeams = (teams: Team[]): Team[] => {
    let sorted = [...teams];
    return sorted.sort((a, b) => a.id - b.id);
  };

  const sortClass = (c: Classification[]): Classification[] => {
    let sorted = [...c];
    return sorted.sort((a, b) => a.rank - b.rank);
  };

  const drawTm = (teams: Team[], pA: number, pB: number, i: number) => {
    const index1 = Math.floor(Math.random() * 4) + 4 * i;
    const index2 = Math.floor(Math.random() * 4) + 4 * i;
    console.log({ player: getPlayerById(pA)!.name, team: teams[index1].name });
    console.log({ player: getPlayerById(pB)!.name, team: teams[index2].name });
    if (index1 === index2) drawTm(teams, pA, pB, i);

    return [
      { player: getPlayerById(pA)!.name, team: teams[index1].name },
      { player: getPlayerById(pB)!.name, team: teams[index2].name },
    ];
  };

  const drawTeams = () => {
    const sortedTm = sortTeams(props.teams);
    const sortedClass = sortClass(props.classification);
    console.log(sortedClass);
    console.log("class", props.classification)

    for (let i = 0; i < props.classification.length / 4; i++) {
      console.log("i*2 ", sortedClass[i * 2]);
      console.log("i*2+1 ", sortedClass[i * 2 + 1]);
      const brToAdd = drawTm(sortedTm, sortedClass[i * 2].playerId, sortedClass[i * 2 + 1].playerId, i);
      setBrackets((prev) => [...prev, ...brToAdd]);
    }
  };

  return (
    <div className="w-40 flex flex-col gap-2">
      <div className="w-full flex justify-center">
        {loading ? (
          <MoonLoader color="#FFFFFF" />
        ) : (
          duel.map((d) => <BracketCard playerA={d.playerA} playerB={d.playerB} />)
        )}
      </div>
      <Button variant="outline" onClick={onGenerateClick}>
        Generate bracket
      </Button>
    </div>
  );
};

export default BracketPage;
