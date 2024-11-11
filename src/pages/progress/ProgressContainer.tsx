import Know from "../Know";
import Learn from "../Learn";
import Reset from "../Reset";
import Skip from "../Skip";
import NextPreviouse from "./NextPreviouse";
import ProgressBar from "./ProgressBar";

const ProgressContainer = () => {
  return (
    <div className="w-full lg:w-[65%] bg-white rounded-lg p-6 border">
      <div className="flex gap-8 w-full  items-center">
        <ProgressBar />
        <NextPreviouse />
      </div>
      <div className="flex gap-2 lg:items-center flex-col lg:flex-row">
        <Know />
        <Learn />
        <Skip />
        <Reset />
      </div>
    </div>
  );
};

export default ProgressContainer;
