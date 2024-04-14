const EstateSection = ({ estate }) => {
  console.log(estate);

  return (
    <div className="card card-compact mt-10 mx-10">
      <figure>
        <img src={estate.image} className="w-96 h-80 rounded-xl" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title mx-auto">{estate.estate_title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default EstateSection;
