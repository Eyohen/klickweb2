import FeaturedCard from "./FeaturedCard";

const Featured = () => {
  return (
    <section className="container mt-12">
      <h1 className="mb-4 font-semibold">Featured Stores</h1>
      <div className="flex items-center space-x-5 mt-4 overflow-x-auto scrollbar-hide">
        <FeaturedCard />
      </div>
    </section>
  );
};

export default Featured;
