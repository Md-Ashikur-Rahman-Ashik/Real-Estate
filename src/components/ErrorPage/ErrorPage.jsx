import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const ErrorPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="max-w-lg p-8 bg-white rounded-lg shadow-xl text-center">
          <h2 className="text-4xl font-bold text-red-600 mb-4">
            Error Encountered
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            We apologize for the inconvenience. Our team of engineers is working
            tirelessly to resolve the issue and get things back on track.
          </p>
          <Link to="/" className="flex justify-center space-x-4">
            <button className="bg-orange-800 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Return to Homepage
            </button>
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ErrorPage;
