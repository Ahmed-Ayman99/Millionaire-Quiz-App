import { useQuiz } from "../contexts/QuizContext";

const QueastionTop = () => {
  const { socendsRemaning } = useQuiz();
  return (
    <div className="h-[50%] relative">
      <div className="flex items-center justify-center rounded-[50%] border-[6px] border-white w-24 h-24 absolute left-20 bottom-2 text-3xl font-bold">
        {socendsRemaning}
      </div>
    </div>
  );
};

export default QueastionTop;
