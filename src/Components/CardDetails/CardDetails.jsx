import { useParams } from "react-router-dom";
import useDonationData from "../../Hooks/useDonationData";
import { useEffect, useState } from "react";
import { getToLocalStorage } from "../../utils/SaveToLocalstorage/SaveToLocalStorage";
import CustomeSpinner from "../CustomeSpinner/CustomeSpinner";
import { Toaster } from "react-hot-toast";

const CardDetails = () => {
  const { id } = useParams();

  const [details, setDetails] = useState([]);
  const { data, loading } = useDonationData();

  useEffect(() => {
    const singleData = data.find((single) => single.id === +id);
    setDetails(singleData);
  }, [data, id]);

  const { title, description, image, price } = details || {};

  if (loading) {
    return <CustomeSpinner />;
  }

  const handleDonate = () => {
    getToLocalStorage(details);
  };

  return (
    <div className="container mx-auto">
      <div className="mt-12">
        <div className="flex justify-center flex-col relative items-center">
          <img className="w-full h-[500px]" src={image} alt="" />
          <div className="absolute bottom-0 left-0 bg-opacity-40 bg-black w-full h-28">
            <div className="mt-9 ml-6">
              <button
                onClick={handleDonate}
                className="px-4 py-2 text-base font-semibold text-white rounded-sm bg-[#FF444A]"
              >
                Donate ${price}
              </button>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold mt-12">{title}</h2>
          <p className="mt-6">{description}</p>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default CardDetails;
