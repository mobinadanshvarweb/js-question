import { useDispatch } from "react-redux";
import Icon from "../components/Icon";
import { restart } from "../redux/slice/progress-slice";

const Reset = () => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(restart());
      }}
      className="flex p-1 lg:justify-between items-center text-red-500 text-sm gap-1 cursor-pointer"
    >
      <Icon height={17} width={17} src="/icon/reset.svg" />
      Reset
    </div>
  );
};

export default Reset;
