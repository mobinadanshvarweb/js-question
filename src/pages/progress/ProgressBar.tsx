import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const ProgressBar = () => {
  const bar = useSelector((state: RootState) => state.progress.bar);
  return (
    <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
      <div
        className="bg-black h-1.5 rounded-full"
        style={{ width: `${bar}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
