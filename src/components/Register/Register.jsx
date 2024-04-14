import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { user, registerUser } = useContext(AuthContext);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // console.log(data.photo);

    if (!/^(?=.*?[A-Z])/.test(data.password)) {
      toast("Your password should at least have one Uppercase letter");
      return;
    } else if (!/^(?=.*?[a-z])/.test(data.password)) {
      toast("Your password should at least have one lowercase letter");
      return;
    } else if (data.password.length < 6) {
      toast("Your password should have minimum 6 characters");
      return;
    }

    registerUser(data.email, data.password)
      .then((result) => {
        toast("User Registration Successful");
        updateProfile(result.user, {
          photoURL: data.photo,
        });
      })
      .catch(() => toast("User Registration Failed"));
  };

  return (
    <div className="hero py-4 md:py-4 lg:py-0 lg:min-h-screen bg-base-200">
      <ToastContainer></ToastContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            {...register("name", { required: true })}
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
            {...register("email", { required: true })}
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
            name="photo"
            {...register("photo", { required: true })}
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
