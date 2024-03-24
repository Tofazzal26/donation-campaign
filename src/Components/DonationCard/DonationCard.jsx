const DonationCard = ({ items }) => {
  const { title, category, image, cardBg, cardBackground, textColor, price } =
    items;

  return (
    <div
      style={{ backgroundColor: cardBackground }}
      className="card card-compact"
    >
      <div className="flex items-center">
        <div>
          <figure>
            <img className="h-[250px] rounded-md" src={image} alt="Shoes" />
          </figure>
        </div>
        <div className="card-body">
          <div>
            <button
              style={{ backgroundColor: cardBg, color: textColor }}
              className="px-4 py-1 font-semibold rounded-md"
            >
              {category}
            </button>
          </div>
          <h2 style={{ color: "black" }} className="text-xl font-semibold">
            {title}
          </h2>
          <p style={{ color: textColor }} className="text-base font-semibold">
            ${price}
          </p>
          <div>
            <button
              style={{ backgroundColor: textColor, color: "white" }}
              className="px-6 text-base py-2 font-semibold rounded-md"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
