import { Link } from "react-router-dom";
import { GrHomeRounded } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";

const Leftbar = () => {
  return (
    <div className=" px-20 pt-10">
      <div className="box-border h-38 w-76 p-4 border-1 bg-[#d4d4d4] rounded-lg">
        <div className="flex">
          <span className="flex-row w-10 h-10 pt-3 px-12">
            <GrHomeRounded />
          </span>

          <span className="text-2xl font-bold">
            <Link to="/home">Beranda</Link>
          </span>
        </div>
        <div className="flex">
          <span className="flex-row w-10 h-10 pt-3 px-12">
            <CgProfile />
          </span>

          <span className="text-2xl font-bold">
            <span className="text-2xl font-bold">
              <Link to="/profil">Profile</Link>
            </span>
          </span>
        </div>
        <div className="flex">
          <span className="flex-row w-10 h-10 pt-3 px-12">
            <FiLogOut />
          </span>
          <span className="text-2xl font-bold">Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
