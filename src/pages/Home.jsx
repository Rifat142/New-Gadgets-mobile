import { useEffect } from "react";

import CardData from "../Components/CardData";
import ClintComment from "../Components/ClientComment";
import Footer from "../Components/Footer";

import Navbar from "../Components/Navbar";
import Welcome from "../Components/Welcome";
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-sine",
      offset: 200,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-slate-100  ">
      <Navbar></Navbar>
      

      <div data-aos="fade-left">
        <Welcome></Welcome>
      </div>

      <div data-aos="fade-right">
        {/* <CardData></CardData> */}
      </div>
      <div data-aos="fade-up">
        <ClintComment></ClintComment>
      </div>

      <div data-aos="zoom-in">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
