// import Image from "next/image";
import home from "../../public/home.jpeg";

import Navbar from "./Navbar";
const Home = () => {
  return (
    <section
      id="home"
      className=" bg-cover mt-0"
      style={{
        backgroundImage: `url('/home.jpeg')`,
        height: "100vh",
        width: "100vw",
      }}
    >
      <div className="w-full mt-10 ml-10 space-y-1 md:w-[600px] md:mt-16 md:ml-16 md:space-y-2 ">
        <p className="text-white text-4xl md:text-7xl font-medium tracking-tighter pt-32">
          Become a leading construction company in the global market
        </p>
        <p className="text-white pt-5 text-lg md:text-xl font-medium flex justify-left">
          Attain excellence in quality and complete value-added projects on time
          &amp; become the customers' most preferred choice
        </p>
      </div>
    </section>
  );
};
export default Home;
