const EstateSection = ({ estate }) => {
  // console.log(estate);
  const { facilities } = estate;

  return (
    <div className="card card-compact mt-10 mx-10">
      <figure>
        <img src={estate.image} className="w-96 h-80 rounded-xl" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title mx-auto">{estate.estate_title}</h2>
        <p className="text-center">{estate.description}</p>
        <p className="text-center capitalize font-bold p-2 rounded bg-orange-800 text-white">
          {estate.status}
        </p>
        <div className="capitalize font-bold flex gap-2 text-white">
          {facilities.map((facility, idx) => (
            <p className="bg-orange-800 p-2 rounded" key={idx}>
              {facility}
            </p>
          ))}
        </div>
        <div className="card-actions justify-center ">
          <button className="btn bg-orange-800 text-white">
            View Property
          </button>
        </div>
      </div>
    </div>
  );
};

export default EstateSection;
