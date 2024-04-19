import { StageContext } from "@/App";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useContext, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface InitialCupPageProps {
  setCupTitle: (title: string) => void;
}

const InitialCupPage = ({ setCupTitle }: InitialCupPageProps) => {
  const stageContext = useContext(StageContext);
  const [input, setInput] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleStartDrawClick = () => {
    setCupTitle(input);
    stageContext?.setStage("PLAYERS");
  };

  return (
    <Card className="w-[25rem]">
      <CardHeader>
        <CardTitle>FIFA Cup Generator</CardTitle>
        <CardDescription>Make a special draw</CardDescription>
      </CardHeader>
      <CardContent>
        <Input placeholder="Enter your cup name" value={input} onChange={handleInputChange} />
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button disabled={input.length === 0} onClick={handleStartDrawClick}>
          START THE DRAW
        </Button>
      </CardFooter>
    </Card>
  );
};

export default InitialCupPage;
