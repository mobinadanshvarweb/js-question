import { useState } from "react";
import { data } from "../../data/q&a";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const QuestionContainer = () => {
  const [show, setShow] = useState(false);
  const currentQuestionIndex = useSelector(
    (state: RootState) => state.progress.currentQuestionIndex
  );
  return (
    <div className="flex flex-col py-5 h-[300px] w-full lg:w-[65%] bg-white border items-center justify-center rounded-lg relative">
      <div className="text-[#6B7280]">Core . {"Beginner"}</div>
      <div className="text-black font-[600] text-2xl text-center flex-1 flex justify-start items-center">
        {data[currentQuestionIndex].question}
      </div>

      <div
        className={`flex flex-col absolute left-0 p-5 bg-[#F5F5F5] w-full duration-300 ${
          show ? "top-0 h-full opacity-100 " : "top-[100%] h-0 opacity-0"
        }`}
      >
        <div
          className={`${
            show
              ? "flex-1   flex justify-center items-center text-center"
              : " hidden"
          }`}
        >
          {data[currentQuestionIndex].answer}
        </div>
        <button
          onClick={() => {
            setShow(!show);
          }}
          className="text-[#6B7280] underline"
        >
          Click to Hide the Answer
        </button>
      </div>

      <button
        onClick={() => {
          setShow(!show);
        }}
        className="text-[#6B7280] underline"
      >
        Click to Reveal the Answer
      </button>
    </div>
  );
};

export default QuestionContainer;
