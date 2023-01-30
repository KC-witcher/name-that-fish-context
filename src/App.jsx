import React from "react";
import "./App.css";
import { GameBoard } from "./Components/GameBoard";
import "./Components/styles/final-score.css";
import { AppProvider } from "./app.context";

function App() {
  return (
    <div className="App">
      <header>
        <AppProvider>
          <GameBoard />
        </AppProvider>
      </header>
    </div>
  );
}

export default App;
