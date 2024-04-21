import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Hash } from "lucide-react";
import { useMemo } from "react";
import { Card, CardContent } from "../ui/card";

interface ClassificationCardProps {
  name: string;
  playersNumber: number;
  value?: string;
  onValueChange: (value: string) => void;
}

const ClassificationCard = (props: ClassificationCardProps) => {
  const ranks: number[] = useMemo(() => {
    let arr: number[] = [];
    for (let i = 0; i < props.playersNumber; i++) {
      arr.push(i + 1);
    }
    return arr;
  }, [props.playersNumber]);

  return (
    <Card>
      <CardContent className="flex p-4 items-center justify-between">
        <div className="w-14">
          <Hash className="h-4 w-4" />
        </div>
        <div>{props.name}</div>
        <Select onValueChange={props.onValueChange} defaultValue={props.value}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Choose rank" />
          </SelectTrigger>
          <SelectContent>
            {ranks.map((r) => (
              <SelectItem value={String(r)}>{`#${r}`}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardContent>
    </Card>
  );
};

export default ClassificationCard;
