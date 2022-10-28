import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="text-3xl font-bold text-center font-Raleway">
      <Navbar />
      <Header />
    </div>
  );
};

export default Home;
