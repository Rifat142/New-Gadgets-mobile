import { NavLink } from "react-router-dom";
import Footer2 from "./Footer2";

const ClintComment = () => {
  return (
 <div className="bg-slate-100">

  <div className="text-center font-bold text-black text-3xl" > What our buyers  say </div>
      <p className="text-black font-serif text-1xl text-center">Join us to explore more tech!</p>
       <div className="grid sm:grid-col  lg:grid-cols-2  text-black bg-slate-100 gap-3 p-8">
      <div className=" border-double border-4 border-sky-500 shadow-2xl">
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <div className="chat-header">
            Obi-Wan Kenobi
            <time className="text-xs opacity-50">12:45</time>
          </div>
          <div className="chat-bubble text-black bg-gradient-to-r from-blue-200 to-blue-500">
          The iPhone is simply amazing! We love its sleek design, incredible performance, and the way it seamlessly integrates with all our other Apple devices. The user experience is intuitive, and the App Store has everything we need. The camera quality is phenomenal, capturing stunning photos and videos every time. We absolutely love our iPhone and couldn't imagine using anything else!
          </div>
          <div className="chat-footer opacity-50">Delivered</div>
        </div>
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <div className="chat-header">
            Anakin
            <time className="text-xs opacity-50">12:46</time>
          </div>
          <div className="chat-bubble text-black  bg-gradient-to-r from-blue-200 to-blue-500">
            Thank you so much for your kind words!
          </div>
          <div className="chat-footer opacity-50">Seen at 12:46</div>
        </div>
      </div>
      <div className="border-double border-4 border-sky-500 shadow-2xl ">
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <div className="chat-header">
            Obi-Wan Kenobi
            <time className="text-xs opacity-50">12:45</time>
          </div>
          <div className="chat-bubble  text-black bg-gradient-to-r from-blue-200 to-blue-500">
          Samsung phones are fantastic! We love the stunning display, powerful features, and innovative design. The AMOLED screen is breathtaking, offering vivid colors and deep blacks. The camera system is incredibly versatile, perfect for any photography enthusiast. The battery life is excellent, and the fast charging feature is a lifesaver. Samsung's One UI is user-friendly and customizable, making it a joy to use every day. We love our Samsung phone!"
          </div>
          <div className="chat-footer opacity-50">Delivered</div>
        </div>
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <div className="chat-header">
            Anakin
            <time className="text-xs opacity-50">12:46</time>
          </div>
          <div className="chat-bubble  text-black bg-gradient-to-r from-blue-200 to-blue-500">
            "You're very welcome! 
          </div>
          <div className="chat-footer opacity-50">Seen at 12:46</div>
        </div>
      </div>
    
    </div>
      <div className="mx-auto flex justify-center pb-3">
        <NavLink to='/comment'> <button className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg ">See more</button></NavLink>
      
      </div>
     
 </div>
  );
};

export default ClintComment;
