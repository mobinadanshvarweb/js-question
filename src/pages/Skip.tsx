import { useSelector } from "react-redux";
import Icon from "../components/Icon";
import { RootState } from "../redux/store";

const Skip = () => {
  const skip = useSelector((state: RootState) => state.progress.skip);
  return (
    <div className="flex p-1 lg:justify-between items-center gap-1 text-sm cursor-default">
      <div className="flex items-center gap-1">
        <Icon height={17} width={17} src="/icon/skip.svg" />
        Skip
      </div>
      <div className="px-2 rounded bg-[#EAECEF] flex justify-center items-center font-[500]">
        {skip} Items
      </div>
    </div>
  );
};

export default Skip;
