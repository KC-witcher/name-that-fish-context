/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from "react";

import { Images } from "./assets/images";

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

const answersLeft = initialFishes.map((fish) => fish.name);

const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [optionsLeft, setOptionsLeft] = useState(answersLeft);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [currIndex, setCurrIndex] = useState(0);

  const processFishGuess = (string) => {
    if (string === initialFishes[currIndex].name) {
      setCorrectCount(correctCount + 1);
    } else {
      setIncorrectCount(incorrectCount + 1);
    }
    setOptionsLeft(optionsLeft.slice(1));
  };

  return (
    <AppContext.Provider
      value={{
        optionsLeft,
        setOptionsLeft,
        initialFishes,
        correctCount,
        setCorrectCount,
        incorrectCount,
        setIncorrectCount,
        currIndex,
        setCurrIndex,
        processFishGuess,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  return {
    initialFishes: context.initialFishes,
    optionsLeft: context.optionsLeft,
    setOptionsLeft: context.setOptionsLeft,
    fishToName: context.fishToName,
    setFishToName: context.setFishToName,
    correctCount: context.correctCount,
    setCorrectCount: context.setCorrectCount,
    incorrectCount: context.incorrectCount,
    setIncorrectCount: context.setIncorrectCount,
    currIndex: context.currIndex,
    setCurrIndex: context.setCurrIndex,
    processFishGuess: context.processFishGuess,
  };
};
