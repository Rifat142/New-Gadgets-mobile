import { NavLink } from "react-router-dom";
import mobileSvg from "../assets/mobile.svg";
import jellyfish from "../assets/jellyfish.svg";

const Welcome = () => {
  return (
    <div className=" ">
      <div className="hero h-1/2  bg-slate-900 ">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <img src={mobileSvg} className=" lg:w-2/4 sm:w-full  " />
          <div>
            <div className="flex ">
              <p
               style={{ margin: 0 }}
              className="text-4xl font-bold text-white">
                {" "}
                Welcome to Gadgets & mobile
              </p>
              <img  className="w-24 -mr-14 flex " src={jellyfish} alt="" />
            </div>

            <p className="mb-14 text-white text-lg font-semibold">
            Welcome to Mobile & Gadgets, your ultimate destination for the latest in technology and innovation! Here, we bring you a curated collection of the most advanced and exciting mobile devices and gadgets that are shaping the future. Whether you're a tech enthusiast, a professional on the go, or someone looking for the perfect device to complement your lifestyle, we have something for everyone.
            </p>
            <NavLink to="/about-us">
              <button className="btn btn-primary text-white">About us</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
