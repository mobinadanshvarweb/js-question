import { useSelector } from "react-redux";
import Icon from "../components/Icon";
import { RootState } from "../redux/store";

const Know = () => {
  const know = useSelector((state: RootState) => state.progress.know);
  return (
    <div className="flex p-1 lg:justify-between items-center gap-1 text-sm cursor-default ">
      <div className="flex items-center gap-1">
        <Icon height={17} width={17} src="/icon/know.svg" />
        Know
      </div>
      <div className="px-2 rounded bg-[#EAECEF] flex justify-center items-center font-[500]">
        {know} Items
      </div>
    </div>
  );
};

export default Know;
