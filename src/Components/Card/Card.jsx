const Card = ({ item }) => {
  const { title, category, image, cardBg, cardBackground, textColor } = item;

  return (
    <div
      style={{ backgroundColor: cardBackground }}
      className="card card-compact"
    >
      <figure>
        <img className="h-[250px]" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div>
          <button
            style={{ backgroundColor: cardBg, color: textColor }}
            className="px-4 py-1 font-semibold rounded-md"
          >
            {category}
          </button>
        </div>
        <h2 style={{ color: textColor }} className="text-xl font-semibold">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default Card;
