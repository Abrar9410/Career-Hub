import { Link, NavLink } from "react-router-dom";

const NavBar = () => {

  return (
    <div className="navbar w-10/12 mx-auto py-8 absolute top-0 inset-x-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Statistics</NavLink>
            </li>
            <li>
              <NavLink to="/applied_jobs">Applied Jobs</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className="text-xl sm:text-2xl lg:text-3xl font-extrabold">
          CareerHub
        </Link>
      </div>
      <div className="navbar-center hidden sm:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Statistics</NavLink>
          </li>
          <li>
            <NavLink to="/applied_jobs">Applied Jobs</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a>
          <button className="text-white text-lg font-extrabold px-7 py-5 rounded-lg bg-gradient-to-r from-linear1 to-linear2">
            Start Applying
          </button>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
