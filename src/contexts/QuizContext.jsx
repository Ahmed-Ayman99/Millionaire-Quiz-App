import { useReducer, createContext, useContext } from "react";
import axios from "axios";

import { scores, socendsRemaning } from "../utils/constants";
import { shuffleArray } from "../utils/herlpers";

const QuizContext = createContext();

const initialState = {
  currentQuestion: {},
  questions: [],
  currentIndex: 0,
  status: "start",
  answer: null,
  scores,
  errMsg: "",
  score: 0,
  socendsRemaning,
  highscore: +localStorage.getItem("highscore") || 0,
};

const reducer = (state, action) => {
  let currentHighscore, randomArray;

  switch (action.type) {
    case "data/loading":
      return { ...state, status: "loading" };

    case "data/error":
      return { ...state, status: "error", errMsg: action.payload };

    case "data/received":
      randomArray = shuffleArray(action.payload);

      return {
        ...state,
        status: "active",
        questions: randomArray,
        currentQuestion: randomArray[state.currentIndex],
      };

    case "data/answer":
      return {
        ...state,
        answer: action.payload,
      };

    case "data/newQuestion":
      return {
        ...state,
        answer: null,
        score: state.scores[state.currentIndex],
        socendsRemaning,
        currentIndex: state.currentIndex + 1,
        currentQuestion: state.questions[state.currentIndex + 1],
      };

    case "data/tick":
      return {
        ...state,
        socendsRemaning: state.socendsRemaning - 1,
      };

    case "data/lose":
      currentHighscore =
        state.highscore > state.score ? state.highscore : state.score;
      localStorage.setItem("highscore", currentHighscore);

      return {
        ...state,
        status: "finish",
        highscore: currentHighscore,
        score: scores[state.currentIndex - 1] || 0,
      };

    case "data/finishGame":
      localStorage.setItem("highscore", scores[scores.length - 1]);

      return {
        ...state,
        status: "finish",
        score: scores[scores.length - 1],
        highscore: scores[scores.length - 1],
      };

    case "data/restart":
      return {
        ...initialState,
        status: "active",
        questions: state.questions,
        highscore: state.highscore,
        currentQuestion: state.questions[0],
      };

    default:
      return state;
  }
};

const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getQuestions = async () => {
    try {
      dispatch({ type: "data/loading" });
      const res = await axios(
        "https://ahmed-ayman99.github.io/millionaire-questions/questions.json"
      );

      dispatch({ type: "data/received", payload: res.data.questions });
    } catch (err) {
      dispatch({ type: "data/error", payload: err.message });
    }
  };

  const sharedVals = {
    ...state,
    dispatch,
    getQuestions,
  };

  return (
    <QuizContext.Provider value={sharedVals}>{children}</QuizContext.Provider>
  );
};

const useQuiz = () => {
  const context = useContext(QuizContext);

  if (context === undefined)
    throw new Error("QuizContext was used outside of the QuizProvider");

  return context;
};

export { useQuiz, QuizProvider };
