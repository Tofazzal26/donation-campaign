const Banner = () => {
  return (
    <div>
      <div className="h-[450px] flex relative flex-col justify-center items-center ">
        <div className="absolute bg-[url('../../../public/images/banner.png')] inset-0 opacity-10 bg-center bg-no-repeat bg-cover"></div>
        <h2 className="block antialiased tracking-norma mb-6 font-sans text-4xl font-semibold leading-[1.3] text-black">
          I Grow By Helping People In Need
        </h2>
        <label className="input input-bordered w-[350px] flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search" />
          <button className="bg-red-500 text-white px-6 rounded-r-md py-3">
            Search
          </button>
        </label>
      </div>
    </div>
  );
};

export default Banner;
