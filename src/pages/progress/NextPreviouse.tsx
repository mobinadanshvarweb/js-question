import Icon from "../../components/Icon";
import "../../style/icon.css";
import { useDispatch, useSelector } from "react-redux";
import { setNext, setPreviouse } from "../../redux/slice/progress-slice";
import { RootState } from "../../redux/store";
const NextPreviouse = () => {
  const dispatch = useDispatch();
  const number = useSelector((state: RootState) => state.progress.number);
  return (
    <div className="flex justify-center items-center gap-2">
      <span
        onClick={() => {
          dispatch(setPreviouse());
        }}
      >
        <Icon
          height={15}
          width={15}
          src="/icon/prviouse.svg"
          classname="icon"
        />
      </span>
      {number}/25
      <span
        onClick={() => {
          dispatch(setNext());
        }}
      >
        <Icon height={15} width={15} src="/icon/next.svg" classname="icon" />
      </span>
    </div>
  );
};

export default NextPreviouse;
