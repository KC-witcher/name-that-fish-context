import "./styles/game-board.css";
import React, { useState } from "react";
import { useAppContext } from "../app.context";
import { ScoreBoard } from "./ScoreBoard";
import { FinalScore } from "./FinalScore";
// ! Do not add props to gameboard
export const GameBoard = () => {
  const [answerInput, setAnswerInput] = useState("");
  const [currIndex, setCurrIndex] = useState(0);

  const {
    correctCount,
    setCorrectCount,
    incorrectCount,
    setIncorrectCount,
    setOptionsLeft,
    optionsLeft,
    initialFishes,
  } = useAppContext();

  const setScoreBoard = () => {
    if (answerInput === initialFishes[currIndex].name) {
      setCorrectCount(correctCount + 1);
      console.log(correctCount);
    } else {
      setIncorrectCount(incorrectCount + 1);
    }
    setOptionsLeft(
      optionsLeft.filter((fish) => fish !== initialFishes[currIndex].name)
    );
  };

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
                setScoreBoard();
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
