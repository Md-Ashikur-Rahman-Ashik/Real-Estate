import { useLoaderData } from "react-router-dom";
import EstateSection from "./EstateSection";

const Estate = () => {
  const estateSection = useLoaderData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      {estateSection.map((estate) => (
        <EstateSection key={estate.id} estate={estate}></EstateSection>
      ))}
    </div>
  );
};

export default Estate;
