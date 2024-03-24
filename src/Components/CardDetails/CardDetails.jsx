import { useParams } from "react-router-dom";
import useDonationData from "../../Hooks/useDonationData";
import { useEffect, useState } from "react";

const CardDetails = () => {
  const { id } = useParams();

  const [details, setDetails] = useState([]);
  const { data, loading } = useDonationData();

  useEffect(() => {
    const singleData = data.find((single) => single.id === +id);
    setDetails(singleData);
  }, [data, id]);

  return (
    <div className="container mx-auto">
      <div>
        <div className="flex justify-center flex-col relative items-center">
          <img src="/public/images/banner.png" alt="" />
          <div className="absolute bottom-0 left-5 bg-opacity-40 bg-black w-full h-28">
            <div className="mt-9 ml-6">
              <button className="px-4 py-2 text-base font-semibold text-white rounded-sm bg-[#FF444A]">
                Donate $290
              </button>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold mt-12">Good Education</h2>
          <p className="mb-12 mt-6">
            There are many things that can be done to ensure that all people
            have access to a good education. Governments can invest in public
            schools, provide financial assistance to students, and make sure
            that all schools have qualified teachers and resources. Families can
            support their childrens education by creating a learning environment
            at home and helping them with their schoolwork. Teachers can create
            a positive and supportive learning environment for their students
            and challenge them to reach their full potential.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
