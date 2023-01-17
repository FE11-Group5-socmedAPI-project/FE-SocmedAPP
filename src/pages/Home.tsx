import Layout from "../components/Layout";
import Leftbar from "../components/Leftbar";
import Center from "../components/Center";
import Rightbar from "../components/Rightbar";

interface PropsType {}
interface StateType {}

const Home = () => {
  return (
    <>
      <Layout>
        <div className="grid grid-cols-3 gap-4">
          <div className="">
            <Leftbar />
          </div>
          <div className="">
            <Center />
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
