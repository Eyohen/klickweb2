const Hero = ({searchQuery}) => {
  console.log("🚀 ~ file: Hero.jsx:2 ~ Hero ~ searchQuery:", searchQuery)
  return (
    <div className="hero-bg flex flex-col justify-center items-center text-center z-[-1] space-y-4 font-semibold">
      <h1 className="text-[40px] leading-[48px] text-white z-0">
        Get unbelievable shipping rates <br /> when you shop with us!
      </h1>
      <a
        href="#"
        className="bg-secondary text-tsecondary text-sm rounded-full px-6 py-3 z-10 hover:cursor-pointer"
      >
        Shop Now
      </a>
    </div>
  );
};

export default Hero;
