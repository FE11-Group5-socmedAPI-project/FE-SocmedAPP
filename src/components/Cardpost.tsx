import axios from "axios";
import { FiMoreVertical } from "react-icons/fi";
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import { FC } from "react";
import { useParams } from "react-router-dom";

interface CardPostProps {
  content: any;
  photo: any;
  created_at: any;
  selectPostingan: (event: React.MouseEvent<HTMLButtonElement>) => void;
  hapusPostingan: (event: React.MouseEvent<HTMLButtonElement>) => void;
  editPostingan: (event: React.MouseEvent<HTMLButtonElement>) => void;
  ubahInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  ubahImage: (event: React.ChangeEvent<HTMLInputElement>) => void;
  contentSelected: string;
  selectedImagePostingan: any;
  cancelEdit: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Cardpost: FC<CardPostProps> = ({
  content,
  photo,
  created_at,
  selectPostingan,
  hapusPostingan,
  editPostingan,
  ubahInput,
  contentSelected,
  selectedImagePostingan,
  ubahImage,
  cancelEdit,
}) => {
  const [cookie, setCookie] = useCookies([
    "token",
    "name",
    "user_id",
    "profile_foto",
  ]);

  const [namep, setNameProfil] = useState();
  const [profile_foto, setProfile] = useState();
  const { id } = useParams();

  // function editPostingan() {
  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${cookie.token}`,
  //     },
  //   };
  //   axios
  //     .put(`http://13.229.98.76/post/${id}`, config)
  //     .then((ress) => {})
  //     .catch((error) => {
  //       alert(error);
  //     });
  // }

  // function hapusPostingan(id) {
  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${cookie.token}`,
  //     },
  //   };
  //   axios
  //     .delete(`http://13.229.98.76/post/${id}`, config)
  //     .then((ress) => {})
  //     .catch((error) => {
  //       alert(error);
  //     });
  // }

  useEffect(() => {
    setNameProfil(cookie.name);
    setProfile(cookie.profile_foto);
  }, []);
  return (
    <div className="pt-10 pb-12">
      <div className="bg-[#737373] rounded-lg pb-5">
        <div className="flex gap-4 px-5 pt-3 ">
          <img
            src="https://assets.jalantikus.com/assets/cache/498/280/userfiles/2019/10/15/foto-aktor-korea-ganteng-nam-joo-hyuk-03-4ae5b.jpg.webp"
            alt=""
            className="w-12 h-12 rounded-[50%]"
          />
          <span className="flex-row font-bold text-2xl">{namep}</span>
          {/* <span>{created_at.subString(0, 20)}</span> */}
          <div className="px-96 colors-white">
            <div className="dropdown dropdown-right">
              <label tabIndex={0} className="btn m-1" onClick={selectPostingan}>
                <FiMoreVertical />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <label htmlFor="edit-modal" className="btn">
                    Edit
                  </label>
                </li>
                <li>
                  <label htmlFor="modal-delete" className="btn">
                    Delete
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="px-20">
          <div className="box-border h-auto w-full border-1 bg-inherit rounded-lg text-white">
            <p>{content}</p>
          </div>
        </div>
        <div className="px-20 pt-3 ">
          <div className="box-border h-auto w-full border-1 bg-[#cbd5e1] rounded-lg">
            <img src={photo} alt="" />
          </div>
        </div>
      </div>
      {/* modal delete */}
      <input type="checkbox" id="modal-delete" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Apakah anda yakin untuk menghapus post?
          </h3>
          <div className="modal-action">
            <button className="btn" onClick={hapusPostingan}>
              Hapus
            </button>
            <label htmlFor="modal-delete" className="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>
      {/* modal edit */}
      <input type="checkbox" id="edit-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Ubah Postingan</h3>
          <p className="mt-2">Konten:</p>
          <input
            type="text"
            className="border-b-2 border-black w-full p-2"
            value={contentSelected}
            onChange={ubahInput}
          />
          <div className="flex flex-col justify-center items-center mt-10">
            <label
              htmlFor="edit-photo"
              style={{ cursor: "pointer" }}
              className={"p-2 bg-slate-300 mb-4 font-bold"}
            >
              Edit Photo
            </label>
            <input
              type="file"
              accept="image/*"
              id="edit-photo"
              style={{ display: "none" }}
              onChange={ubahImage}
            />
            <img src={selectedImagePostingan} alt="" width={200} />
          </div>
          <div className="modal-action">
            <button className="btn" onClick={editPostingan}>
              Edit
            </button>
            <label htmlFor="edit-modal" className="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardpost;
