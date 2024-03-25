import { useEffect, useState } from "react";
import Banner from "../../Components/Banner/Banner";
import CategoryList from "../../Components/CategoryList/CategoryList";
import useDonationData from "../../Hooks/useDonationData";

const Home = () => {
  const [value, setValue] = useState("");
  const [filtered, setFiltered] = useState([]);
  const { data, loading } = useDonationData();

  useEffect(() => {
    setFiltered(data);
  }, [data]);

  const handleSearch = () => {
    if (value.trim() != "") {
      const searchData = data.filter((item) =>
        item.category.toLowerCase().includes(value.toLowerCase())
      );
      setFiltered(searchData);
    } else {
      setFiltered(data);
    }
  };

  return (
    <div>
      <Banner handleSearch={handleSearch} setValue={setValue} />
      <CategoryList filtered={filtered} />
    </div>
  );
};

export default Home;
