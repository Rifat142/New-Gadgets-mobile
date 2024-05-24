import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import laptop from "../assets/laptop.svg"
const AboutUs = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero min-h-screen bg-gray-900 text-white">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={laptop}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <div className="flex">
              <h1 className="text-5xl font-bold">Welcome to Gadgets & mobile  </h1>
            </div>
            <p className="py-6 text-lg text-white font-semibold">
              Welcome to Mobile & Gadgets, your ultimate destination for the
              latest in technology and innovation! Here, we bring you a curated
              collection of the most advanced and exciting mobile devices and
              gadgets that are shaping the future. Whether you're a tech
              enthusiast, a professional on the go, or someone looking for the
              perfect device to complement your lifestyle, we have something for
              everyone. Discover Cutting-Edge Mobile Phones: Stay connected with
              our range of smartphones, featuring the latest in design,
              performance, and functionality. From flagship models boasting
              incredible camera systems and powerful processors to
              budget-friendly options offering great value, our selection caters
              to all needs and preferences. Explore Innovative Gadgets: Dive
              into our diverse array of gadgets designed to enhance your
              everyday life. From smartwatches that keep you in touch and on
              track to wireless earbuds delivering exceptional sound quality,
              our gadgets are here to make your life more convenient and
              enjoyable.
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AboutUs;
