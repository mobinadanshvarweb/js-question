import Icon from "../components/Icon";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

const Learn = () => {
  const learn = useSelector((state: RootState) => state.progress.learn);

  return (
    <div className="flex p-1 lg:justify-between items-center gap-1 text-sm cursor-default">
      <div className="flex items-center gap-1">
        <Icon height={17} width={17} src="/icon/learn.svg" />
        Learn
      </div>
      <div className="px-2 rounded bg-[#EAECEF] flex justify-center items-center font-[500]">
        {learn} Items
      </div>
    </div>
  );
};

export default Learn;
