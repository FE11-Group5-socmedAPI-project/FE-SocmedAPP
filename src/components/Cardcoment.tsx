import { FiSend } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";

const Cardcoment = () => {
  return (
    <>
      <div className="w-86 h-auto bg-[#d4d4d4] rounded-lg relative pb-12 ">
        <h1 className="text-xl px-5">Komentar</h1>
        <div className="flex gap-4 px-5 pt-3">
          <img
            src="https://assets.jalantikus.com/assets/cache/498/280/userfiles/2019/10/15/foto-aktor-korea-ganteng-nam-joo-hyuk-03-4ae5b.jpg.webp"
            alt=""
            className="w-12 h-12 rounded-[50%]"
          />
          <span className="flex-row font-semibold text-xl">Devi Andri</span>
        </div>
        <div className="px-20 ">
          <div className="box-border h-auto w-full border-1 bg-white rounded-lg">
            <textarea className="w-full h-auto" />
          </div>
        </div>
        <button className="hover:bg-sky-700 ">
          <FiSend className="absolute right-20 h-16 w-8 " />
        </button>
      </div>
      <div className="w-86 h-auto bg-[#d4d4d4] relative pb-12 ">
        <div className="flex gap-4 px-5 pt-3">
          <img
            src="https://assets.jalantikus.com/assets/cache/498/280/userfiles/2019/10/15/foto-aktor-korea-ganteng-nam-joo-hyuk-03-4ae5b.jpg.webp"
            alt=""
            className="w-12 h-12 rounded-[50%]"
          />
          <span className="flex-row font-semibold text-xl">Devi Andri</span>
          <button className="hover:bg-sky-700 ">
            <AiFillDelete className="absolute top-14 right-20 h-6 w-6 " />
          </button>
        </div>
        <div className="px-20">
          <div className="box-border h-auto w-94 border-1 bg-white rounded-lg">
            <p>nice</p>
          </div>
        </div>
        <div className="flex gap-4 px-5 pt-3">
          <img
            src="https://i0.wp.com/www.mediamaya.net/wp-content/uploads/2017/08/Pemandangan-di-Paris.jpg?w=800&ssl=1"
            alt=""
            className="w-12 h-12 rounded-[50%]"
          />
          <span className="flex-row font-semibold text-xl">Bambang</span>
        </div>
        <div className="px-20">
          <div className="box-border h-auto w-94 border-1 bg-white rounded-lg">
            <p>cantik</p>
          </div>
        </div>
        <div className="flex gap-4 px-5 pt-3">
          <img
            src="https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1641518726/mnijm34pmvdoy9oa3shw.jpg"
            alt=""
            className="w-12 h-12 rounded-[50%]"
          />
          <span className="flex-row font-semibold text-xl">Fajar</span>
        </div>
        <div className="px-20">
          <div className="box-border h-auto w-94 border-1 bg-white rounded-lg">
            <p>Beautiful</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardcoment;
