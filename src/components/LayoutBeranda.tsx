import React, { FC } from "react";

import NavbarBeranda from "../components/NavbarHome";

interface LayoutBerandaProps {
  children: React.ReactNode;
}

const LayoutBeranda: FC<LayoutBerandaProps> = ({ children }) => {
  return (
    <div className="w-full h-screen bg-[#a1a1aa] dark:bg-gray-900 flex flex-col overflow-auto">
      <NavbarBeranda />
      <div className="h-full w-full overflow-auto">{children}</div>
    </div>
  );
};

export default LayoutBeranda;
