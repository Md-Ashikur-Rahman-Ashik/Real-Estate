import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
  };

  return (
    <div className="hero py-4 md:py-0 lg:py-0 lg:min-h-screen md:min-h-screen bg-base-200">
      <form onSubmit={handleSubmit}>
        <h2 className="text-4xl font-bold text-orange-800">Please Login</h2>
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
      </form>
    </div>
  );
};

export default Login;
