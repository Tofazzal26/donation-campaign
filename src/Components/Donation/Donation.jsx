import useLocalStorage from "../../Hooks/useLocalStorage";
import DonationCard from "../DonationCard/DonationCard";

const Donation = () => {
  const { localData } = useLocalStorage();

  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-4 mt-12">
        {localData.map((items) => (
          <DonationCard key={items.id} items={items} />
        ))}
      </div>
    </div>
  );
};

export default Donation;
