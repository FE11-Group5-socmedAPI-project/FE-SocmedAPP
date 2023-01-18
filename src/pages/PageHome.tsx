import React from "react";

import Layout from "../components/LayoutHome";
import Leftbar from "../components/LeftBarHome";
import Center from "../components/Center";
import Rightbar from "../components/RightBarHome";
import LayoutHome from "../components/LayoutHome";
import ButtonLoadMore from "../components/ButtonLoadMore";

interface PropsType {}
interface StateType {}

const PageHome = () => {
  return (
    <>
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
    </>
  );
};

export default PageHome;
