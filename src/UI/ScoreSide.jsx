import { useQuiz } from "../contexts/QuizContext";
import { formatCurrency } from "../utils/herlpers";

const ScoreSide = () => {
  const { currentIndex, scores } = useQuiz();

  return (
    <div className="w-[25%] flex  items-center justify-center">
      <ul className="list-none flex w-full justify-center items-center flex-col-reverse ">
        {scores.map((score, ind) => (
          <li
            key={ind}
            className={`flex items-center w-full rounded-sm py-2 px-6  ${
              currentIndex === ind ? "bg-teal-500" : ""
            }`}
          >
            <span className="text-lg font-thin w-[30%]">{ind + 1}</span>
            <span className="text-xl font-light">{formatCurrency(score)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScoreSide;
