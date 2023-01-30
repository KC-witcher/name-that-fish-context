import React from "react";
import "./styles/score-board.css";
import { useAppContext } from "../app.context";

// ! do not add props to scoreboard
export const ScoreBoard = () => {
  const { correctCount, incorrectCount, optionsLeft } = useAppContext();
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">
        {optionsLeft.map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
};
