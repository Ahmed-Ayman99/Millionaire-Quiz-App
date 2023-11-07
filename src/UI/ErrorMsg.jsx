import { useQuiz } from "../contexts/QuizContext";
import Button from "./Button";

const ErrorMsg = ({ message = "Something went very wrong" }) => {
  const { getQuestions } = useQuiz();

  const getstarted = () => getQuestions();

  return (
    <div className="oaerror danger">
      <strong>Error</strong>- {message}
      <Button onClick={getstarted}>Try Again</Button>
    </div>
  );
};

export default ErrorMsg;
