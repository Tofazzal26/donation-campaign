import useDonationData from "../../Hooks/useDonationData";
import Card from "../Card/Card";

const CategoryList = () => {
  const { data, loading } = useDonationData();

  return (
    <div className="my-14">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 container mx-auto">
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
