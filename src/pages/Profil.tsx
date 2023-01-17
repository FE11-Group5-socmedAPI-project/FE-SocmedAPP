import Layout from "components/Layout";
import Navbar from "components/Navbar/Navbar";
import Cardpost from "components/Cardpost";
import { FcCamera } from "react-icons/fc";
import { FiEdit2 } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";

interface PropsType {}
interface StateType {}

const Profil = () => {
  return (
    <>
      <div className="w-full h-screen">
        <Navbar />
        <div className="static">
          <img
            src="https://images.tokopedia.net/img/KRMmCm/2022/6/22/c6fa942e-31b6-4a64-bd29-7599f47c9dc2.jpg"
            alt="foto sampul"
            className="object-cover h-48 w-full"
          />
          <div className="absolute gap-2 right-0 flex flex-row top-48 bg-[#94a3b8] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-lg">
            <FcCamera className="" />
            <span className="text-white">Edit Foto Sampul</span>
          </div>
        </div>
        <div className="flex justify-center  ">
          <img
            src="https://assets.jalantikus.com/assets/cache/498/280/userfiles/2019/10/15/foto-aktor-korea-ganteng-nam-joo-hyuk-03-4ae5b.jpg.webp"
            alt=""
            className="w-52 h-52 rounded-[50%] absolute items-center top-36"
          />
          <FcCamera className="absolute top-80 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-lg" />
          <p className="pt-36 font-bold text-2xl">Devi Andri</p>
        </div>

        <div className="px-20">
          <div className="box-border h-auto w-full p-4 border-1 bg-[#cbd5e1] rounded-lg">
            <div className="grid grid-cols-2 gap-4">
              <div className="box-border h-auto w-full p-4 border-1 bg-white rounded-lg">
                <div className="bg-[#cbd5e1] rounded-lg">
                  <div className="flex gap-4 ">
                    <img
                      src="https://assets.jalantikus.com/assets/cache/498/280/userfiles/2019/10/15/foto-aktor-korea-ganteng-nam-joo-hyuk-03-4ae5b.jpg.webp"
                      alt=""
                      className="w-12 h-12 rounded-[50%]"
                    />
                    <span className="flex-row font-bold text-2xl rounded-lg">
                      Status
                    </span>
                  </div>
                  <div className="px-16">
                    <div className="box-border h-auto w-full border-1 bg-white rounded-lg">
                      <textarea className="w-full h-auto" />
                    </div>
                  </div>
                  <div className="px-16 pt-3 ">
                    <div className="flex flex-row gap-36">
                      <div className="flex">
                        <button className="flex-row w-24 bg-[#64748b] rounded-lg text-white">
                          <FcCamera className="flex-row pt-3" />
                          Post Image
                        </button>
                      </div>
                      <div className="flex">
                        <button className="flex-row  w-24 bg-[#64748b] rounded-lg text-white">
                          Share
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-24">
                <div className="box-border h-auto w-80 p-4 border-1 bg-white rounded-lg px-10">
                  <p>Your Account</p>
                  <div className="flex flex-row gap-24">
                    <p className="">Name </p>
                    <p>Devi Andri</p>
                  </div>
                  <div className="flex flex-row gap-6">
                    <p className="">Number Phone </p>
                    <p>04734284799</p>
                  </div>
                  <div className="flex flex-row gap-24">
                    <p className="">Gmail </p>
                    <p>andri@gmail.com</p>
                  </div>
                  <div className="flex flex-row gap-4 px-26">
                    <FiEdit2 />
                    <BsTrash />
                  </div>
                </div>
              </div>
              <div>
                <Cardpost />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profil;
