import ControlContainer from "./pages/control/ControlContainer";
import ProgressContainer from "./pages/progress/ProgressContainer";
import QuestionContainer from "./pages/q&a/QuestionContainer";

const App = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col bg-[#F9FAFB] py-12 gap-8">
      <header className="flex flex-col  w-full justify-center items-center gap-4">
        <h1 className="text-black font-bold text-xl lg:text-6xl text-center ">
          JavaScript Questions
        </h1>
        <p className="text-[#6B7280] lg:text-xl text-center">
          Test, rate and improve your JavaScript knowledge with these questions.
        </p>
      </header>
      <ProgressContainer />
      <QuestionContainer />
      <ControlContainer />
    </div>
  );
};

export default App;
