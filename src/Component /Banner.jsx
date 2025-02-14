const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center px-6 py-12 md:py-20">
      {/* Left content */}
      <div className="w-full md:w-1/2 space-y-6">
        <span className="text-lg">Zippty</span>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          The smarter way to shop for your pet
        </h1>
        <p className="text-gray-600 max-w-md">
          At Zippty, we know your pets are more than just animals—they're
          family. Whether you have a curious kitten or an energetic dog,
        </p>
        <button className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors">
          Shop Now
        </button>
      </div>

      {/* Right image */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <div className="relative">
          <div className="absolute inset-0 bg-[#FF7629] rounded-full"></div>
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-14%20at%204.56.14%E2%80%AFPM-l11toOf0lXz3Q0UxO8fYC7NDcGxgpG.png"
            alt="Collection of happy pet faces"
            className="relative z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
