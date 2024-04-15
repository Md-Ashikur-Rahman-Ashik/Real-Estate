import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";

const EstateDetails = () => {
  const { id } = useParams();

  const estateData = useLoaderData();

  //   console.log(estateData)

  const desiredId = estateData.find((ourId) => ourId.id == id);

  return (
    <div className="px-10 py-2 mb-4">
      <Helmet>
        <title>TerraHarvest Hub | Estate</title>
      </Helmet>
      <h2 className="text-4xl mb-4 text-center font-bold">
        {desiredId.estate_title}
      </h2>
      <div>
        <img
          src={desiredId.image}
          className="rounded-xl md:w-2/3 lg:w-2/3 mx-auto"
          alt=""
        />
      </div>
      <p className="text-center mt-4 font-bold">Price: {desiredId.price}</p>
      <p className="text-center mt-1 font-bold">Area: {desiredId.area}</p>
      <p className="text-center mt-1 font-bold">
        Location: {desiredId.location}
      </p>
      <div className="mt-1 capitalize font-bold justify-center flex gap-2 text-white">
        {desiredId.facilities.map((facility, idx) => (
          <p className="bg-orange-800 p-2 rounded" key={idx}>
            {facility}
          </p>
        ))}
      </div>
      <p className="mt-4 text-xl text-center">{desiredId.description}</p>
    </div>
  );
};

export default EstateDetails;
