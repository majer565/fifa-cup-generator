import { createContext, useState } from "react";
import RootPage from "./components/root/RootPage";
import { ThemeProvider } from "./components/themeProvider/ThemeProvider";

type Stage = "INIT" | "PLAYERS" | "TEAMS" | "CLASSIFICATION" | "BRACKETS";

interface StageContextType {
  stage: Stage;
  setStage: React.Dispatch<React.SetStateAction<Stage>>;
}

export const StageContext = createContext<StageContextType | null>(null);

export default function App() {
  const [stage, setStage] = useState<Stage>("INIT");

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <StageContext.Provider value={{ stage, setStage }}>
        <div className="w-full flex justify-center">
          <RootPage />
        </div>
      </StageContext.Provider>
    </ThemeProvider>
  );
}
