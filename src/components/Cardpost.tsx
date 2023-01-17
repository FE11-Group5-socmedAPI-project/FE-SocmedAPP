import { FiMoreVertical } from "react-icons/fi";

const Cardpost = () => {
  return (
    <div className="pt-10 pb-12 ">
      <div className="bg-[#64748b] rounded-lg">
        <div className="flex gap-4 ">
          <img
            src="https://assets.jalantikus.com/assets/cache/498/280/userfiles/2019/10/15/foto-aktor-korea-ganteng-nam-joo-hyuk-03-4ae5b.jpg.webp"
            alt=""
            className="w-12 h-12 rounded-[50%]"
          />
          <span className="flex-row font-bold text-2xl">Devi</span>
          <FiMoreVertical className="" />
        </div>
        <div className="px-16">
          <div className="box-border h-auto w-full border-1 bg-white rounded-lg">
            <p>
              "Segala sesuatu memiliki kesudahan, yang sudah berakhir biarlah
              berlalu dan yakinlah semua akan baik-baik saja."
            </p>
          </div>
        </div>
        <div className="px-16 pt-3 ">
          <div className="box-border h-auto w-full border-1 bg-[#cbd5e1] rounded-lg">
            <img
              src="https://i2.wp.com/blog.tripcetera.com/id/wp-content/uploads/2020/10/pulau-padar.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardpost;
