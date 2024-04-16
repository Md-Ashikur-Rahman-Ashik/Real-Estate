import { Link } from "react-router-dom";
import 'animate.css';

const EstateSection = ({ estate }) => {
  // console.log(estate);
  const { facilities, price, area, location, id, short_description } = estate;

  return (
    <div className="card card-compact mt-10 mx-10 border py-2">
      <figure>
        <img src={estate.image} className="w-full h-80 rounded-xl" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title mx-auto">{estate.estate_title}</h2>
        <p className="text-center animate__animated animate__bounce__delay-4s">{short_description}</p>
        <p className="text-center capitalize font-bold p-2 rounded bg-orange-800 text-white">
          {estate.status}
        </p>
        <div className="capitalize font-bold flex gap-2 text-white">
          {facilities.map((facility, idx) => (
            <p className="bg-orange-800 p-2 rounded text-center" key={idx}>
              {facility}
            </p>
          ))}
        </div>
        <div className="card-actions justify-center ">
          <Link to={`/estate/${id}`}>
            <button className="btn bg-orange-800 text-white">
              View Property
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EstateSection;
