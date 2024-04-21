import { CheckedState } from "@radix-ui/react-checkbox";
import { Card, CardContent } from "../ui/card";
import { Checkbox } from "../ui/checkbox";

interface OperationCardProps {
  icon: React.ReactNode;
  title: string;
  checked: boolean;
  onCheckChange: (checked: CheckedState) => void;
  desc?: string;
}

const OperationCard = (props: OperationCardProps) => {
  return (
    <Card>
      <CardContent className="flex p-4 items-center justify-between">
        <div className="w-14">{props.icon}</div>
        <div className="w-full">
          <div>{props.title}</div>
          <div>{props.desc}</div>
        </div>
        <Checkbox checked={props.checked} onCheckedChange={props.onCheckChange} />
      </CardContent>
    </Card>
  );
};

export default OperationCard;
