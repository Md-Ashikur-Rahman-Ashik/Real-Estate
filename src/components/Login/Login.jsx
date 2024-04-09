import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";

const Login = () => {
  const { user, logInUser, googleUser, facebookUser } = useContext(AuthContext);

  const handleFacebookUser = () => {
    facebookUser()
      .then(() => toast("Login with Facebook account successful"))
      .catch(() => toast("User Already Logged In"));
  };

  const handleGoogleUser = () => {
    googleUser()
      .then(() => toast("Login with Google account successful "))
      .catch(() => {
        user && toast("User Already Logged In")
      });
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    logInUser(data.email, data.password)
      .then(() => toast("User Login Successful"))
      .catch(() => toast("User Already Logged In"));
  };

  return (
    <div className="hero py-4 md:py-4 lg:py-0 lg:min-h-screen bg-base-200">
      <ToastContainer></ToastContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            {...register("email", { required: true })}
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
            {...register("password", { required: true })}
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-orange-800 text-white">Login</button>
        </div>
        <button
          onClick={handleGoogleUser}
          className="btn w-full mt-4 bg-orange-800 text-white"
        >
          <FaGoogle /> Login with Google
        </button>
        <button
          className="btn w-full mt-4 bg-orange-800 text-white"
          onClick={handleFacebookUser}
        >
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
