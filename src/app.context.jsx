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
  };
};
