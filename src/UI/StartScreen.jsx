import Button from "./Button";

import { useQuiz } from "../contexts/QuizContext";

const StartScreen = () => {
  const { getQuestions } = useQuiz();

  const getstarted = () => getQuestions();

  return (
    <section className="flex flex-col gap-4 p-24 text-center w-full">
      <h2 className="text-6xl">Welcome to The Quiz!</h2>

      <p className="text-2xl mb-8">15 questions to test your React mastery</p>

      <Button onClick={getstarted}>Let&apos;s start</Button>
    </section>
  );
};

export default StartScreen;
