import { useState } from "react";
import useLocalStorage from "../../Hooks/useLocalStorage";
import DonationCard from "../DonationCard/DonationCard";

const Donation = () => {
  const { localData } = useLocalStorage();

  const [toggle, setToggle] = useState(false);

  const handleSeeAll = () => {
    setToggle(!toggle);
  };

  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-4 mt-12">
        {localData.slice(0, toggle ? localData.length : 4).map((items) => (
          <DonationCard key={items.id} items={items} />
        ))}
      </div>
      <div className="text-center mt-6">
        <button
          onClick={handleSeeAll}
          className="bg-[#009444] px-6 py-3 font-semibold text-white rounded-md"
        >
          {!toggle ? "Show All" : "Show Less"}
        </button>
      </div>
    </div>
  );
};

export default Donation;
