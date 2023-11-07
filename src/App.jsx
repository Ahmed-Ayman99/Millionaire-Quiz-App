import FinishScreen from "./UI/FinishScreen";
import StartScreen from "./UI/StartScreen";
import QuizLayout from "./UI/QuizLayout";
import ErrorMsg from "./UI/ErrorMsg";
import Loading from "./UI/Loading";

import { useQuiz } from "./contexts/QuizContext";

const App = () => {
  const { status, errorMsg } = useQuiz();

  return (
    <main className="min-h-screen flex bg-[#020230] text-white">
      {status === "start" && <StartScreen />}
      {status === "finish" && <FinishScreen />}
      {status === "active" && <QuizLayout />}
      {status === "loading" && <Loading />}
      {status === "error" && <ErrorMsg message={errorMsg} />}
    </main>
  );
};

export default App;
