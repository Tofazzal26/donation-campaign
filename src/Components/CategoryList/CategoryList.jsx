import useDonationData from "../../Hooks/useDonationData";
import Card from "../Card/Card";
import CustomeSpinner from "./../CustomeSpinner/CustomeSpinner";

const CategoryList = ({ filtered, loading }) => {
  if (loading) {
    return <CustomeSpinner />;
  }

  return (
    <div className="my-14">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 container mx-auto">
        {filtered.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
