import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { user, registerUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!/^(?=.*?[A-Z])/.test(password)) {
      toast("Your password should at least have one Uppercase letter");
      return;
    } else if (!/^(?=.*?[a-z])/.test(password)) {
      toast("Your password should at least have one lowercase letter");
      return;
    } else if (password.length < 6) {
      toast("Your password should have minimum 6 characters");
      return;
    }

    registerUser(email, password)
      .then((result) => toast("User Registration Successful"))
      .catch((error) => console.error(error));
  };

  return (
    <div className="hero py-4 md:py-4 lg:py-0 lg:min-h-screen bg-base-200">
      <ToastContainer></ToastContainer>
      <form onSubmit={handleSubmit}>
        <h2 className="text-4xl font-bold text-orange-800 text-center">
          Please Register
        </h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-orange-800">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered"
            name="name"
            required
          />
        </div>
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
              Photo URL
            </span>
          </label>
          <input
            type="text"
            placeholder="Photo URL"
            className="input input-bordered"
            name="photoURL"
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
          <button className="btn bg-orange-800 text-white">Register</button>
        </div>
        <p className="flex gap-1 justify-center mt-4">
          {"Already have an account? Please"}
          <Link className="text-blue-500 font-bold" to="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
