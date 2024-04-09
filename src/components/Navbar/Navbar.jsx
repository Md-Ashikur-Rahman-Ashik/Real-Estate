import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

  const navLinks = (
    <>
      <li>
        <NavLink className="text-orange-800 font-bold" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="text-orange-800 font-bold" to="/update-profile">
          Update Profile
        </NavLink>
      </li>
      <li>
        <NavLink className="text-orange-800 font-bold" to="/login">
          Login
        </NavLink>
      </li>
      <li>
        <NavLink className="text-orange-800 font-bold" to="/register">
          Register
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar justify-center bg-base-100">
      <div className="lg:navbar-start">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost text-xl text-orange-800 font-bold"
        >
          TerraHarvest Hub
        </Link>
      </div>
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div>
        <Link className="text-orange-800 font-bold">
          User Profile
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
