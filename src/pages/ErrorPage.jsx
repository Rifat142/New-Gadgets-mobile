import { NavLink } from "react-router-dom";
import img from "../assets/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg";

const ErrorPage = () => {
  return (
    <div className="bg-slate-100 mx-auto flex flex-col items-center justify-center min-h-screen">
      <div className="relative">
        <img className="mx-auto" src={img} alt="404 Error" />

      <NavLink to='/'>  <button
          className="btn btn-warning absolute left-1/2 transform -translate-x-1/2 bottom-10"
          // Redirects to home page on click
        >
          Go to home page
        </button></NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;
