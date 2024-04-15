import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Estate from "../Estate Section/Estate";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>TerraHarvest Hub | Home</title>
      </Helmet>
      <Banner></Banner>
      <Estate></Estate>
    </div>
  );
};

export default Home;
