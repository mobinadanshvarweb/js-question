import { useDispatch } from "react-redux";
import ControlButton from "../../components/ControlButton";
import { setKnow, setLearn, setSkip } from "../../redux/slice/progress-slice";

const ControlContainer = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-2 lg:gap-0 lg:flex-row w-full lg:w-[65%] lg:items-center justify-between">
      <ControlButton
        classname="bg-white border text-black hover:bg-black hover:text-white"
        onclick={() => {
          dispatch(setKnow());
        }}
        src="/icon/know.svg"
        text="Already know that"
      />
      <ControlButton
        classname="bg-white border text-black hover:bg-black hover:text-white"
        onclick={() => {
          dispatch(setLearn());
        }}
        src="/icon/learn.svg"
        text="Didn't know that"
      />
      <ControlButton
        classname="border text-red-500 hover:bg-red-500 hover:text-white"
        onclick={() => {
          dispatch(setSkip());
        }}
        src="/icon/redskip.svg"
        text="Skip Question"
      />
    </div>
  );
};

export default ControlContainer;
