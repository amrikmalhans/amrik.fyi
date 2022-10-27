import type { NextPage } from "next";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div className="text-3xl font-bold text-center font-Raleway">
      <Navbar />
      {/* <h1 className="text-oxford-blue">
        Hello, I am Amrik Malhans, a Backend Engineer{" "}
      </h1> */}
    </div>
  );
};

export default Home;
