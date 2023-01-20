import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
//import Swal from "../utils/Swal";
import { useCookies } from "react-cookie";
import Navbar from "../components/Navbar/Navbar";
import Cardpost from "../components/Cardpost";
import Cardakun from "../components/Cardakun";
import { FcCamera } from "react-icons/fc";
import Swal from "../utils/Swal";
import withReactContent from "sweetalert2-react-content";

import { PostType } from "../utils/types/post";
import { ProfileType } from "utils/types/profile";

interface PropsType {}
interface StateType {}

const Profil = () => {
  // const { id } = useParams();
  //const [cookie, setCookie] = useCookies();
  const [content, setContent] = useState<string>("");
  const [objSubmit, setObjSubmit] = useState<ProfileType>({});
  const [photo, setPhoto] = useState<any>({});
  const [name, setName] = useState<string>("");
  const [phone_number, setPhoneNumber] = useState<number>(1);
  const [email, setEmail] = useState<string>("");
  const [editContent, setEditContent] = useState<string>("");
  const [image, setImage] = useState<any>();
  const [previewImage, setPreviewImage] = useState<any>();
  const [editName, setEditName] = useState<string>("");
  const [editEmail, setEditEmail] = useState<string>("");
  const [editphonenumber, setEditPhoneNumber] = useState<number>(0);
  const [datas, setDatas] = useState<PostType[]>([]);
  const [selectedData, setSelectedData] = useState<number>();
  const [selectedContent, setSelectedContent] = useState<any>("");
  const [selectedPhoto, setSelectedPhoto] = useState<any>();
  const [newImage, setNewImage] = useState<any>();
  const [newPreviewImage, setNewPreviewImage] = useState<any>();
  const MySwal = withReactContent(Swal);
  //untuk profil
  const [cookie, setCookie] = useCookies([
    "token",
    "name",
    "user_id",
    "profile_foto",
  ]);

  const navigate = useNavigate();

  const [namep, setNameProfil] = useState();
  const [profile_foto, setProfile] = useState();

  const handleFile = (file: any) => {
    setImage(file);
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleEditImage = (file: any) => {
    setNewImage(file);
    const reader = new FileReader();
    reader.onload = () => {
      setNewPreviewImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    setNameProfil(cookie.name);
    setProfile(cookie.profile_foto);
  }, []);
  //akhir ptofil

  function getProfil() {
    const config = {
      headers: {
        Authorization: `Bearer ${cookie.token}`,
      },
    };
    axios
      .get(`http://13.229.98.76/users`, config)
      .then((ress) => {
        const { email, phone_number, name } = ress.data.data;
        setEmail(email);
        setName(name);
        setPhoneNumber(phone_number);
      })
      .catch((error) => {
        alert(error);
      });
  }
  useEffect(() => {
    getProfil();
    getPost();
  }, []);

  function getPost() {
    const config = {
      headers: {
        Authorization: `Bearer ${cookie.token}`,
      },
    };

    axios
      .get(`http://13.229.98.76/posts`, config)
      .then((ress) => {
        const result = ress.data.data;
        setDatas(result);
        console.log("data post yang login", result);
      })
      .catch((err) => {
        alert(err);
      });
  }

  async function addPost(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("content", content);
    formData.append("photo", image);

    const config = {
      headers: {
        Authorization: `Bearer ${cookie.token}`,
      },
    };
    await axios
      .post("http://13.229.98.76/posts", formData, config)
      .then((ress) => {
        const { message } = ress.data;
        console.log("data baru", message);
        getPost();
        setImage({});
        alert("berhasil update status");
      })
      .catch((err) => {
        alert(err);
      });
  }

  function hapusAkun() {
    console.log("clicked");
    const config = {
      headers: {
        Authorization: `Bearer ${cookie.token}`,
      },
    };
    axios
      .delete(`http://13.229.98.76/users`, config)
      .then((ress) => {
        // const { data } = ress.data;
        console.log(ress);
        navigate("/");
        // console.log("data yang sudah dihapus", data);
      })
      .catch((error) => {
        alert(error);
      });
  }

  async function updateAkun(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // const body = {
    //   editName: editName,
    //   editphonenumber: editphonenumber,
    //   editEmail: editEmail,
    // };

    const formData = new FormData();
    formData.append("name", editName);
    // if(editphonenumber) {
    //   formData.append("phone_number", phone_number)
    // }
    formData.append("phone_number", editphonenumber);
    formData.append("email", editEmail);

    const config = {
      headers: {
        Authorization: `Bearer ${cookie.token}`,
      },
    };
    await axios
      .put(`http://13.229.98.76/users`, formData, config)
      .then((ress) => {
        const { data } = ress.data;
        console.log("data yang diubah", data);
        setCookie("name", data.name);
        window.location.reload();
      })
      .catch((err) => {
        alert(err);
      });
  }

  // edit dan delete postingan
  function hapusPostingan(id: any) {
    const config = {
      headers: {
        Authorization: `Bearer ${cookie.token}`,
      },
    };
    axios
      .delete(`http://13.229.98.76/posts/${id}`, config)
      .then((ress) => {
        MySwal.fire({
          title: "Success",
          text: "Berhasil menghapus postingan",
          showCancelButton: false,
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        });
      })
      .catch((error) => {
        alert(error);
      });
  }

  function editPostingan(id: any) {
    const formData = new FormData();
    if (selectedContent) {
      formData.append("content", selectedContent);
    }
    if (newImage) {
      formData.append("photo", newImage);
    }

    const config = {
      headers: {
        Authorization: `Bearer ${cookie.token}`,
      },
    };
    axios
      .put(`http://13.229.98.76/posts/${id}`, formData, config)
      .then((ress) => {
        MySwal.fire({
          title: "Success",
          text: "Berhasil mengubah postingan",
          showCancelButton: false,
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        });
      })
      .catch((error) => {
        alert(error);
      });
  }

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
            src="https://cdn.kibrispdr.org/data/366/gambar-icon-orang-0.png"
            alt=""
            className="w-52 h-52 rounded-[50%] absolute items-center top-36 bg-black"
          />
          <FcCamera className="absolute top-80 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-lg" />
          <p className="pt-36 font-bold text-2xl">{namep}</p>
        </div>

        <div className="px-20">
          <div className="box-border h-auto w-full p-4 border-1 bg-[#a3a3a3] rounded-lg">
            <div className="grid grid-cols-2 gap-4">
              <div className="box-border h-auto w-full p-4 border-1 bg-white rounded-lg">
                <div className="bg-[#737373] rounded-lg">
                  <form onSubmit={addPost}>
                    <div className="flex gap-4 px-5 pt-3">
                      <img
                        src="https://assets.jalantikus.com/assets/cache/498/280/userfiles/2019/10/15/foto-aktor-korea-ganteng-nam-joo-hyuk-03-4ae5b.jpg.webp"
                        alt=""
                        className="w-12 h-12 rounded-[50%]"
                      />
                      <span className="flex-row font-bold text-2xl rounded-lg">
                        Status
                      </span>
                    </div>
                    <div className="px-20">
                      <div className="box-border h-auto w-full border-1 bg-white rounded-xl">
                        <textarea
                          className="w-full h-auto overflow-y-auto h-36"
                          onChange={(e) => setContent(e.target.value)}
                          style={{ resize: "none" }}
                        />
                      </div>
                    </div>
                    <div className="px-28 pt-3 pb-6">
                      <div className="flex flex-row gap-30">
                        <div className="flex">
                          <input
                            type="file"
                            className="flex-row w-42 bg-white rounded-lg text-black"
                            onChange={(e) => {
                              if (!e.currentTarget.files) {
                                return;
                              }
                              handleFile(e.currentTarget.files[0]);
                            }}
                          />
                        </div>
                        <div className="flex">
                          <button
                            className={`flex-row  w-24 bg-white rounded-lg text-black disabled:opacity-10 enabled:opacity-100`}
                            disabled={content ? false : true}
                          >
                            Share
                          </button>
                        </div>
                      </div>
                      <div className="flex justify-center mt-5">
                        {previewImage ? (
                          <img src={previewImage} width={200} height={100} />
                        ) : (
                          <p className="text-white">
                            You haven't input any file yet.
                          </p>
                        )}
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="px-36">
                <Cardakun
                  name={name}
                  phone_number={phone_number}
                  email={email}
                  updateAkun={updateAkun}
                  editEmail={editEmail}
                  editName={editName}
                  editphonenumber={editphonenumber}
                  setEditEmail={(e) => setEditEmail(e.target.value)}
                  setEditPhoneNumber={(e) =>
                    setEditPhoneNumber(e.target.valueAsNumber)
                  }
                  setEditName={(e) => setEditName(e.target.value)}
                  hapusAkun={hapusAkun}
                />
              </div>
              <div>
                {datas.map((data) => (
                  <Cardpost
                    content={data.content}
                    photo={data.photo}
                    created_at={data.created_at}
                    key={data.id}
                    selectPostingan={() => {
                      setSelectedData(data.id);
                      setSelectedContent(data.content);
                      setSelectedPhoto(data.photo);
                    }}
                    contentSelected={selectedContent}
                    ubahInput={(e) => setSelectedContent(e.target.value)}
                    selectedImagePostingan={
                      newPreviewImage ? newPreviewImage : selectedPhoto
                    }
                    ubahImage={(e) => handleEditImage(e.target.files[0])}
                    cancelEdit={() => setNewPreviewImage("")}
                    editPostingan={() => editPostingan(selectedData)}
                    hapusPostingan={() => {
                      console.log(selectedData);
                      hapusPostingan(selectedData);
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profil;
