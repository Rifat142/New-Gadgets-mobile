import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Authprovider/Authprovider";

const Navbar = () => {
  const { user, logOut, setLoading } = useContext(AuthContext);
  console.log(user);
  const handleSignOut = () => {
    setLoading(true);
    logOut()
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error("Sign-out error: ", error);
        setLoading(false);
      });
  };

  const navbarTittles = (
    <div className="text-white flex gap-5 text-xl font-semibold">
      <NavLink
        className={({ isActive }) => (isActive ? "text-blue-700" : "")}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? "text-blue-700" : "")}
      >
        Login
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive }) => (isActive ? "text-blue-700" : "")}
      >
        Register
      </NavLink>
      <NavLink
        to="/add-product"
        className={({ isActive }) => (isActive ? "text-blue-700" : "")}
      >
        Add Product 
      </NavLink>
      <NavLink
        to="/cart"
        className={({ isActive }) => (isActive ? "text-blue-700" : "")}
      >
        My Cart 
      </NavLink>
    </div>
  );
  return (
    <div>
      <div className="navbar  bg-gradient-to-r from-gray-900 to-gray-600">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  mt-3 z-[1] p-2 shadow   w-full"
            >
              {navbarTittles}
            </ul>
          </div>
          <div>
            <svg
              width="80"
              height="80"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.051 24.1259L30.0106 16.9731L41.8773 45.0838L24.8926 52.3366L13.051 24.1259Z"
                  fill="#2A2941"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.2588 19.9242L32.1933 12.7715L44.06 40.8822L27.0753 48.1349L15.2588 19.9242Z"
                  fill="white"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24.7923 43.7583L42.2787 36.3054L44.1604 40.9072L26.8746 48.31L24.7923 43.7583Z"
                  fill="#FEC34E"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M42.5296 35.6802L24.1651 43.5082L26.6237 48.9602L44.7625 41.1322L42.5296 35.6802ZM25.4446 44.0083L42.0279 36.9307L43.5582 40.6571L27.1255 47.6847L25.4446 44.0083Z"
                  fill="#2A2941"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M32.6198 11.7961L14.2301 19.5491L26.6488 49.2354L45.0635 41.4074L32.5696 11.8462L32.6198 11.7961ZM16.2874 20.3744L31.7919 13.8219L43.0565 40.5321L27.5018 47.1596L16.2874 20.3744Z"
                  fill="#2A2941"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M33.0713 17.1733L37.6876 15.2476L42.1784 18.0736L38.5406 24.276L31.9675 21.8501L33.0713 17.1733Z"
                  fill="#A694FE"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M37.7629 14.3472L32.4191 16.573L31.0392 22.3002L38.8918 25.2013L43.2321 17.7985L37.7629 14.3472ZM33.7488 17.6984L37.6124 16.0728L41.0996 18.2987L38.1894 23.2756L32.8958 21.3248L33.7488 17.6984Z"
                  fill="#2A2941"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M40.7734 28.1025L45.2642 26.1267L50.0059 28.7527L46.92 35.2552L39.6696 33.1044L40.7734 28.1025Z"
                  fill="#A694FE"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M45.3144 25.2512L40.071 27.5521L38.7413 33.6794L47.3466 36.2054L51.0346 28.3774L45.3144 25.2012V25.2512ZM41.4509 28.6775L45.2392 27.0019L49.0024 29.1027L46.5187 34.3296L40.5979 32.579L41.4509 28.6775Z"
                  fill="#2A2941"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M27.3011 28.5275L30.8385 26.9019L34.1 29.1277L31.9424 33.7295L26.7491 32.3289L27.3011 28.5275Z"
                  fill="#A694FE"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M30.9138 26.0015L26.6237 27.9772L25.9213 32.9041L32.4191 34.6548L35.1537 28.8525L30.9138 26.0015ZM28.0287 29.0526L30.7633 27.8022L33.1216 29.4278L31.5159 32.779L27.6273 31.7286L28.0287 29.0526Z"
                  fill="#2A2941"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.6633 19.5492L26.147 18.5238L25.7707 17.6484L23.287 18.6738L23.6633 19.5492Z"
                  fill="#2A2941"
                ></path>{" "}
                <path
                  d="M34.5516 43.0581C35.1286 43.0581 35.5802 42.608 35.5802 42.0578C35.5802 41.5075 35.1286 41.0574 34.5516 41.0574C33.9745 41.0574 33.5229 41.5075 33.5229 42.0578C33.5229 42.608 33.9745 43.0581 34.5516 43.0581Z"
                  fill="#2A2941"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <a className="btn btn-ghost sm:text-lg lg:text-2xl text-white">
            Gadgets & mobile
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navbarTittles}</ul>
        </div>

        <div className="navbar-end">
          <div className=" sm:grid  lg:flex">
            <p className="  sm:m-auto  lg:mr-4 text-white">
              {user ? user.displayName : "my name"}{" "}
            </p>
            <div className="w-10 ">
              <img
                className="rounded-full"
                alt="Tailwind CSS Navbar component"
                src={
                  user
                    ? user.photoUrl
                    : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                }
              />
            </div>
          </div>

          {user ? (
            <button
              onClick={handleSignOut}
              className="ml-2 btn btn-outline btn-warning"
            >
              Sign-out
            </button>
          ) : (
            <Link to="/login">
              <button className="ml-2 btn btn-outline btn-primary">
                Log-in
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
