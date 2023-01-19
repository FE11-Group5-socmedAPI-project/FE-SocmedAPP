import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import Leftbar from "../components/Leftbar";
import Center from "../components/Center";
import Rightbar from "../components/Rightbar";
import { PostType } from "../utils/types/post";

interface PropsType {}
interface StateType {
  datas: PostType[];
}

const Home = () => {
  const [datas, setDatas] = useState<PostType[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get(`http://13.229.98.76/allposts`)
      .then((ress) => {
        const result = ress.data.data;
        setDatas(result);
        console.log("data post ada", result);
      })
      .catch((err) => {
        alert(err);
      });
  }
  return (
    <>
      <Layout>
        <div className="grid grid-cols-3 gap-4">
          <div className="">
            <Leftbar />
          </div>
          <div className="">
            {datas.map((data) => (
              <Center
                key={data.id}
                content={data.content}
                photo={data.photo}
                user_name={data.user_name}
              />
            ))}
          </div>
          <div className="">
            <Rightbar />
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Home;
