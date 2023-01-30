import React from "react";
import { useAppContext } from "../app.context";

// ! Do Not Add Props Here
export const FinalScore = () => {
  const { correctCount, incorrectCount } = useAppContext();
  return (
    <div id="final-score">
      <h1>Your Final Score Was</h1>
      <div id="score">
        <p>{correctCount}</p>
        <hr />
        <p>{correctCount + incorrectCount}</p>
      </div>
    </div>
  );
};
