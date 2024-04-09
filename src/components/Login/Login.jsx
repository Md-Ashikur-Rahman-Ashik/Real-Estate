import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const { user, logInUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    logInUser(email, password)
      .then((result) => console.log(result.user))
      .catch((error) => console.error(error));
  };

  return (
    <div className="hero py-4 md:py-4 lg:py-0 lg:min-h-screen bg-base-200">
      <form onSubmit={handleSubmit}>
        <h2 className="text-4xl font-bold text-orange-800 text-center">
          Please Login
        </h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-orange-800">Email</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered"
            name="email"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-orange-800">
              Password
            </span>
          </label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-orange-800 text-white">Login</button>
        </div>
        <button className="btn w-full mt-4 bg-orange-800 text-white">
          <FaGoogle /> Login with Google
        </button>
        <button className="btn w-full mt-4 bg-orange-800 text-white">
          <FaFacebook /> Login with Facebook
        </button>
        <p className="flex gap-1 justify-center mt-4">
          {"Don't have an account? Please"}
          <Link className="text-blue-500 font-bold" to="/register">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
