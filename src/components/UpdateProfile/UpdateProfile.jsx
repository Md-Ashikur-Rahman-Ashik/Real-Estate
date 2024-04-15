import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";

const UpdateProfile = () => {
  const { user, setUser } = useContext(AuthContext);
  console.log(user);
  const [clicked, setClicked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    // console.log(e.target.name.value)
    const photo = e.target.photo.value;

    updateProfile(setUser({ ...user, displayName: name, photoURL: photo }));
  };

  const handleClicked = (e) => {
    e.preventDefault();
    setClicked(true);
  };

  return (
    <div className="md:1/2 lg:w-1/2 mx-auto min-h-screen mt-10">
      <Helmet>
        <title>TerraHarvest Hub | Update Profile</title>
      </Helmet>
      <div className="flex-col lg:flex-row-reverse">
        <div className="w-full shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit}>
            <button
              onClick={handleClicked}
              className="btn bg-orange-800 text-white w-1/2 ml-auto"
            >
              Edit Profile
            </button>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Name</span>
              </label>
              {clicked ? (
                <input
                  type="text"
                  name="name"
                  placeholder={user.displayName}
                  className="input input-bordered"
                  required
                />
              ) : (
                <span className="font-bold bg-black text-white py-2 px-2 border rounded-xl">
                  {user.displayName}
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <span className="font-bold bg-black text-white py-2 px-2 border rounded-xl">
                {user.email}
              </span>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Photo URL</span>
              </label>
              {clicked ? (
                <input
                  type="text"
                  name="photo"
                  placeholder={user.photoURL}
                  className="input input-bordered"
                  required
                />
              ) : (
                <span className="font-bold bg-black text-white py-2 px-2 border rounded-xl">
                  {user.photoURL}
                </span>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-orange-800 text-white">
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
