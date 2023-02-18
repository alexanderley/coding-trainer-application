import React, { createContext, useState } from "react";
import { jsQuestionsData, reactQuestionsData } from "./questions";

// create a context
const QuestionContext = createContext();

const QuestionProvider = ({ children }) => {
  // Create the Javascritp questions
  const [jsQuestions, setJsQuestions] = useState([...jsQuestionsData]);
  // Create the React questions
  const [reactQuestions, setReactQuestions] = useState([...reactQuestionsData]);
  return (
    <QuestionContext.Provider value={{ jsQuestions, reactQuestions }}>
      {children}
    </QuestionContext.Provider>
  );
};

export { QuestionContext, QuestionProvider };
