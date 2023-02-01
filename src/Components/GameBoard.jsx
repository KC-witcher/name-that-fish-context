import "./styles/game-board.css";
import React, { useState } from "react";
import { useAppContext } from "../app.context";
import { ScoreBoard } from "./ScoreBoard";
import { FinalScore } from "./FinalScore";
// ! Do not add props to gameboard
export const GameBoard = () => {
  const [answerInput, setAnswerInput] = useState("");

  const {
    currIndex,
    optionsLeft,
    initialFishes,
    setCurrIndex,
    processFishGuess,
  } = useAppContext();

  return (
    <div>
      {optionsLeft.length ? (
        <div>
          <ScoreBoard />

          <div id="game-board">
            <div id="fish-container">
              <img
                src={initialFishes[currIndex].url}
                alt={initialFishes[currIndex].name}
              />
            </div>
            <form
              id="fish-guess-form"
              onSubmit={(e) => {
                setCurrIndex(currIndex + 1);
                e.preventDefault();
                setAnswerInput("");
                processFishGuess(answerInput);
              }}
            >
              <label htmlFor="fish-guess">What kind of fish is this?</label>
              <input
                value={answerInput}
                type="text"
                name="fish-guess"
                onChange={(e) => setAnswerInput(e.target.value)}
              />
              <input type="submit" />
            </form>
          </div>
        </div>
      ) : (
        <FinalScore />
      )}
    </div>
  );
};
