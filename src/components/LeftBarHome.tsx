// import { Link } from "react-router-dom";
import { AiOutlineSetting } from "react-icons/ai";
import { FaHashtag } from "react-icons/fa";

const LeftBarHome = () => {
  return (
    <div className=" px-20 pt-10 gap-3">
      <div className="box-border h-38 w-76 p-4 border-1 bg-[#d4d4d4] rounded-lg">
        <div className="flex">
          <span className="flex-row w-10 h-10 pt-3 px-12">
            <AiOutlineSetting />
          </span>
          <span className="text-2xl font-bold">Setting</span>
        </div>

        <div className="flex">
          <span className="flex-row w-10 h-10 pt-3 px-12">
            <FaHashtag />
          </span>
          <span className="text-2xl font-bold">Explore</span>
        </div>
      </div>
    </div>
  );
};

export default LeftBarHome;
