import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser();
  };

  // console.log(user);

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
    <div className="w-[calc(100vw-10)] flex justify-center lg:gap-32 gap-2 items-center bg-base-100">
      <div className="">
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
            <div className="w-10 lg:w-[5%]">
              {user ? (
                <div className="flex gap-2 mb-2 mt-2">
                  <img
                    className="rounded-full cursor-pointer"
                    title={user.displayName}
                    src={user.photoURL}
                    alt=""
                  />
                  <Link className="btn" onClick={handleSignOut}>
                    LogOut
                  </Link>
                </div>
              ) : (
                <Link to="/login" className="btn mb-2 mt-2">
                  Login
                </Link>
              )}
            </div>
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost text-xl text-orange-800 font-bold"
        >
          TerraHarvest Hub
        </Link>
      </div>
      <div className="hidden lg:flex lg:justify-between lg:items-center">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="w-10 lg:w-[5%] hidden lg:inline">
        {user ? (
          <div className="flex gap-2 mb-2 mt-2">
            <img
              className="rounded-full cursor-pointer"
              title={user.displayName}
              src={user.photoURL}
              alt=""
            />
            <Link className="btn" onClick={handleSignOut}>
              LogOut
            </Link>
          </div>
        ) : (
          <Link to="/login" className="btn mb-2 mt-2">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
