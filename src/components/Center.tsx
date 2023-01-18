// import { Link } from "react-router-dom";
import { GoCommentDiscussion } from "react-icons/go";
import { BiShareAlt } from "react-icons/bi";

const Center = () => {
  return (
    <>
      <div className="pt-10 pb-12 ">
        <div className="bg-[#d4d4d4] rounded-lg">
          <div className="flex gap-4 px-5 pt-3">
            <img
              src="https://assets.jalantikus.com/assets/cache/498/280/userfiles/2019/10/15/foto-aktor-korea-ganteng-nam-joo-hyuk-03-4ae5b.jpg.webp"
              alt=""
              className="w-12 h-12 rounded-[50%]"
            />
            <span className="flex-row font-semibold text-xl">Budi</span>
          </div>
          <div className="px-20">
            <div className="box-border h-auto w-94 border-1 bg-white rounded-lg">
              <p>
                "Segala sesuatu memiliki kesudahan, yang sudah berakhir biarlah
                berlalu dan yakinlah semua akan baik-baik saja."
              </p>
            </div>
          </div>
          <div className="px-20 pt-3 ">
            <div className="box-border h-auto w-94 border-1 bg-[#cbd5e1] rounded-lg">
              {/* <Link to="/post/:id_post"> */}
              <img
                src="https://i2.wp.com/blog.tripcetera.com/id/wp-content/uploads/2020/10/pulau-padar.jpg"
                alt=""
              />
              {/* </Link> */}
            </div>
            <div className="flex flex-row gap-36 pb-5">
              <div className="flex">
                <span className="flex-row pt-3 pt-3">
                  <GoCommentDiscussion />
                </span>
                <span className="font-normal">12345</span>
              </div>
              <div className="flex">
                <span className="flex-row pt-3 px-24 pt-3">
                  <BiShareAlt />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-[#d4d4d4] rounded-lg">
          <div className="flex gap-4 px-5 pt-3">
            <img
              src="https://assets.jalantikus.com/assets/cache/498/280/userfiles/2019/10/15/foto-aktor-korea-ganteng-nam-joo-hyuk-03-4ae5b.jpg.webp"
              alt=""
              className="w-12 h-12 rounded-[50%]"
            />
            <span className="flex-row font-semibold text-xl">Andi</span>
          </div>
          <div className="px-20">
            <div className="box-border h-auto w-94 border-1 bg-white rounded-lg">
              <p>
                "Segala sesuatu memiliki kesudahan, yang sudah berakhir biarlah
                berlalu dan yakinlah semua akan baik-baik saja."
              </p>
            </div>
          </div>
          <div className="px-20 pt-3 ">
            <div className="box-border h-auto w-94 border-1 bg-[#cbd5e1] rounded-lg">
              <img
                src="https://i2.wp.com/blog.tripcetera.com/id/wp-content/uploads/2020/10/pulau-padar.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-row gap-36 pb-5">
              <div className="flex">
                <span className="flex-row pt-3 pt-3">
                  <GoCommentDiscussion />
                </span>
                <span className="font-normal">12345</span>
              </div>
              <div className="flex">
                <span className="flex-row pt-3 px-24 pt-3">
                  <BiShareAlt />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Center;
