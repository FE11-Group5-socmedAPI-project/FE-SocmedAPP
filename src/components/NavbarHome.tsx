import { useNavigate, Link } from "react-router-dom";
import Button from "./Button";

// import { IconName } from "react-icons/hi";

// HiSearch

const NavbarHome = () => {
  return (
    <div className="navbar sticky border-gray-200 bg-blue-900 gap-3">
      <div className="btn-circle bg-slate-400 text-purple-700 justify-center">
        <img src="https://i2.wp.com/avatar-management--avatars.us-west-2.prod.public.atl-paas.net/initials/SA-3.png?ssl=1" />
      </div>
      <div className="flex-1 gap-5">
        <a className="btn btn-ghost normal-case text-2xl text-white">
          <Link to="/register">SocialAPP </Link>
        </a>
        <div className="flex flex-1 items-center  justify-around">
          <div className="form-control w-full max-w-xs">
            <input type="text" placeholder="Search..." className="input" />
          </div>
        </div>

        <div className="justify-between">
          <label tabIndex={0} className="justify-between:flex-end">
            <a className="btn btn-ghost normal-case text-2xl text-white">
              <Link to="/register">Login </Link>
            </a>
          </label>
        </div>
      </div>
    </div>
  );
};

export default NavbarHome;
