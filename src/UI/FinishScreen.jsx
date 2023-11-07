import Button from "./Button";

import { useQuiz } from "../contexts/QuizContext";
import { formatCurrency } from "../utils/herlpers";

const FinishScreen = () => {
  const { highscore, scores, score, dispatch } = useQuiz();
  const handleFinish = () => dispatch({ type: "data/restart" });

  let emoji;
  if (score === scores[scores.length - 1]) emoji = "🥇";
  if (score <= scores[scores.length - 4]) emoji = "🎉";
  if (score <= scores[scores.length - 7]) emoji = "🙃";
  if (score <= scores[scores.length - 10]) emoji = "🤨";
  if (score <= scores[scores.length - 13]) emoji = "🤦‍♂️";

  return (
    <section className="w-full flex items-center justify-center flex-col ">
      <h2 className="text-4xl mb-6">
        {emoji} You scored {formatCurrency(score) || 0} out of{" "}
        {formatCurrency(scores[scores.length - 1])}
      </h2>

      {highscore > 0 && (
        <p className="text-2xl mb-10">
          (Highscore: {formatCurrency(highscore)} )
        </p>
      )}

      <Button onClick={handleFinish}>Restart quiz</Button>
    </section>
  );
};

export default FinishScreen;
