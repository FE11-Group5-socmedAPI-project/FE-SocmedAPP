import { useEffect, useState } from "react";
import axios from "axios";
import LayoutHome from "../components/LayoutHome";
import LeftBarHome from "../components/LeftBarHome";
import Center from "../components/Center";
import RightBarHome from "../components/RightBarHome";
import { PostType } from "../utils/types/post";

interface PropsType {}
interface StateType {
  datas: PostType[];
}

const PageHome = () => {
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
      <LayoutHome>
        <div className="grid grid-cols-3 gap-4">
          <div className="">
            <LeftBarHome />
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
            <RightBarHome />
          </div>
        </div>
      </LayoutHome>
    </>
  );
};
export default PageHome;
