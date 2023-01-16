import React, { FC } from "react";

import NavbarHome from "./NavbarHome";

interface LayoutHomeProps {
  children: React.ReactNode;
}

const LayoutHome: FC<LayoutHomeProps> = ({ children }) => {
  return (
    <div className="w-full h-screen bg-[#a1a1aa] dark:bg-gray-900 flex flex-col overflow-auto">
      <NavbarHome />
      <div className="h-full w-full overflow-auto">{children}</div>
    </div>
  );
};

export default LayoutHome;
