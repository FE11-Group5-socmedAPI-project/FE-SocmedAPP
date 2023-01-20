import Cardcoment from "../components/Cardcoment";
import Leftbar from "../components/Leftbar";
import Rightbar from "../components/Rightbar";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useEffect, useState } from "react";
import { GoCommentDiscussion } from "react-icons/go";
import { BiShareAlt } from "react-icons/bi";
import { PostType } from "utils/types/post";

interface PropsType {
  params?: any;
}

interface StateType {
  data: PostType;
}

const Detail = () => {
  const { id } = useParams();
  const [cookie, setCookie] = useCookies();
  const [data, setData] = useState<PostType>({});

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    const config = {
      headers: {
        Authorization: `Bearer ${cookie.token}`,
      },
    };
    axios
      .get(`http://13.229.98.76/posts/${id}`, config)
      .then((ress) => {
        const result = ress.data;
        setData(result);
        console.log("data post berdasarkan id", result);
      })
      .catch((error) => {
        alert(error);
      });
  }
  return (
    <>
      <Layout>
        <div className="grid grid-cols-3 gap-4">
          <div className="">
            <Leftbar />
          </div>

          <div className="pt-10 pb-12 ">
            <div className="bg-[#d4d4d4] rounded-lg">
              <div className="flex gap-4 px-5 pt-3">
                <img
                  src="https://assets.jalantikus.com/assets/cache/498/280/userfiles/2019/10/15/foto-aktor-korea-ganteng-nam-joo-hyuk-03-4ae5b.jpg.webp"
                  alt=""
                  className="w-12 h-12 rounded-[50%]"
                />

                <span className="flex-row font-semibold text-xl">
                  {data.user_name}
                </span>
              </div>
              <div className="px-20">
                <div className="box-border h-auto w-94 border-1 bg-white rounded-lg">
                  <p>{data.content}</p>
                </div>
              </div>
              <div className="px-20 pt-3 ">
                <div className="box-border h-auto w-94 border-1 bg-[#cbd5e1] rounded-lg">
                  <img src={data.photo} alt="" />
                </div>
                <div className="flex flex-row gap-36 pb-5">
                  <div className="flex">
                    <span className="flex-row pt-3 pt-3">
                      <GoCommentDiscussion />
                    </span>
                    <span className="font-normal">123</span>
                  </div>
                  <div className="flex">
                    <span className="flex-row pt-3 px-24 pt-3">
                      <BiShareAlt />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <Cardcoment />
          </div>

          <div className="">
            <Rightbar />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Detail;
