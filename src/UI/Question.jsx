import { useEffect } from "react";
import useSound from "use-sound";

import play from "../../public/sounds/play.mp3";
import wrong from "../../public/sounds/wrong.mp3";

import { useQuiz } from "../contexts/QuizContext";
import AnswerButton from "./AnswerButton";

const Question = () => {
  const { currentQuestion, answer, dispatch, socendsRemaning } = useQuiz();
  const [playPlay] = useSound(play);
  const [playWrong] = useSound(wrong);

  useEffect(() => {
    const timer = setInterval(() => {
      if (socendsRemaning <= 1) {
        playWrong();
        return dispatch({ type: "data/lose" });
      }

      if (answer !== null) return;

      dispatch({ type: "data/tick" });
    }, 1000);

    return () => clearInterval(timer);
  }, [answer, dispatch, socendsRemaning, playWrong]);

  useEffect(() => {
    playPlay();
  }, [playPlay]);

  return (
    <>
      <div className="w-[80%] text-center p-5 rounded-xl border-[2px] border-white text-xl mb-10 mt-10">
        {currentQuestion.question}
      </div>

      <ul className="w-full grid grid-cols-2 px-10 gap-4">
        {currentQuestion.options.map((option, ind) => {
          return (
            <li key={ind}>
              <AnswerButton option={option} ind={ind} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Question;
