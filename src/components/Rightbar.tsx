import React from "react";
import { FaHashtag } from "react-icons/fa";

const Rightbar = () => {
  return (
    <>
      <div className="px-20 pt-10">
        <div className="box-border h-38 w-76 p-4 border-1 bg-[#d4d4d4] rounded-lg">
          <div className="flex">
            <span className="flex-row w-10 h-10 pt-3 px-12">
              <FaHashtag />
            </span>
            <span className="text-2xl font-bold">Update</span>
          </div>
          <div className="flex">
            <span className="flex-row w-10 h-10 pt-3 px-12">
              <FaHashtag />
            </span>
            <span className="text-2xl font-bold">Trending</span>
          </div>
        </div>
      </div>
      <div className="px-20 pt-10">
        <div className="box-border h-auto w-76 p-4 border-1 bg-[#d4d4d4] rounded-lg">
          <div className="flex gap-4 pb-3 px-12">
            <img
              src="https://assets.jalantikus.com/assets/cache/498/280/userfiles/2019/10/15/foto-aktor-korea-ganteng-nam-joo-hyuk-03-4ae5b.jpg.webp"
              alt=""
              className="w-8 h-8 rounded-[50%]"
            />
            <span className="flex-row font-semibold">Budi</span>
          </div>
          <div className="flex gap-4 pb-3 px-12">
            <img
              src="https://assets.jalantikus.com/assets/cache/498/280/userfiles/2019/10/15/foto-aktor-korea-ganteng-nam-joo-hyuk-03-4ae5b.jpg.webp"
              alt=""
              className="w-8 h-8 rounded-[50%]"
            />
            <span className="flex-row font-semibold">Eka</span>
          </div>
          <div className="flex gap-4 pb-3 px-12">
            <img
              src="https://assets.jalantikus.com/assets/cache/498/280/userfiles/2019/10/15/foto-aktor-korea-ganteng-nam-joo-hyuk-03-4ae5b.jpg.webp"
              alt=""
              className="w-8 h-8 rounded-[50%]"
            />
            <span className="flex-row font-semibold">Inri</span>
          </div>
          <div className="flex gap-4 pb-3 px-12">
            <img
              src="https://assets.jalantikus.com/assets/cache/498/280/userfiles/2019/10/15/foto-aktor-korea-ganteng-nam-joo-hyuk-03-4ae5b.jpg.webp"
              alt=""
              className="w-8 h-8 rounded-[50%]"
            />
            <span className="flex-row pb-3 font-semibold">Fauzan</span>
          </div>
          <div className="flex gap-4 px-12">
            <img
              src="https://assets.jalantikus.com/assets/cache/498/280/userfiles/2019/10/15/foto-aktor-korea-ganteng-nam-joo-hyuk-03-4ae5b.jpg.webp"
              alt=""
              className="w-8 h-8 rounded-[50%]"
            />
            <span className="flex-row font-semibold">Aldi</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rightbar;
