import { useEffect, useState } from "react";

const useDonationData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const Donation = async () => {
      setLoading(true);
      const res = await fetch("/public/Donation.json");
      const data = await res.json();
      setData(data);
      setLoading(false);
    };
    Donation();
  }, []);

  return { data, loading };
};

export default useDonationData;
