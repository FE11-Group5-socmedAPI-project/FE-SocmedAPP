import React from "react";
import { useNavigate, Link } from "react-router-dom";

import Leftbar from "../components/LeftBarHome";
import Center from "../components/Center";
import Rightbar from "../components/RightBarHome";
import LayoutHome from "../components/LayoutHome";

interface PropsType {}
interface StateType {}

const PageHome = () => {
  return (
    <>
      <Link to="/register">
        <LayoutHome>
          <div className="grid grid-cols-3 gap-4">
            <div className="">
              <Leftbar />
            </div>
            <div className="">
              <Center />
            </div>
            <div className="">
              <Rightbar />
            </div>
          </div>
        </LayoutHome>
      </Link>
    </>
  );
};

export default PageHome;
