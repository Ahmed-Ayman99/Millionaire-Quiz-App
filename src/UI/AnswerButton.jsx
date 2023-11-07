import { useEffect } from "react";
import useSound from "use-sound";

import { useQuiz } from "../contexts/QuizContext";
import correct from "../../public/sounds/correct.mp3";
import wrong from "../../public/sounds/wrong.mp3";

const AnswerButton = ({ ind, option }) => {
  const { answer, currentQuestion, questions, currentIndex, dispatch } =
    useQuiz();

  const isClicked = answer === ind;
  const [playCorrect] = useSound(correct);
  const [playWrong] = useSound(wrong);

  const handleClick = () => dispatch({ type: "data/answer", payload: ind });

  useEffect(() => {
    let timer = setTimeout(() => {
      if (!isClicked) return;

      if (answer === currentQuestion.corrected) {
        playCorrect();
        return currentIndex === questions.length - 1
          ? dispatch({ type: "data/finishGame" })
          : dispatch({ type: "data/newQuestion" });
      }

      playWrong();
      dispatch({ type: "data/lose", payload: ind });
    }, 3000);

    return () => clearTimeout(timer);
  }, [answer, dispatch, questions, isClicked, currentIndex]);

  return (
    <button
      onClick={handleClick}
      disabled={answer !== null}
      className={`${
        isClicked
          ? answer === questions[currentIndex].corrected
            ? "correct"
            : "wrong"
          : ""
      } w-full p-3 cursor-pointer text-xl font-light rounded-2xl border border-white text-center bg-gradient-to-r from-[#0e0124] to-[#22074d] hover:from-[#0000cd] hover:to-[#0000cd] active::from-[#0000cd] active::to-[#0000cd]`}
    >
      {option}
    </button>
  );
};

export default AnswerButton;
