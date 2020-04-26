import React from "react";
import useGame from "./game/Game";
import MainScreen from "./screens/MainScreen";

const App = () => {
  const game = useGame();

  return <MainScreen game={game} />;
};

export default App;
