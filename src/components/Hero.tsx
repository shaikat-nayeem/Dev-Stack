import heroImage from '../assets/images/banner-stack.png'; // Make sure to place your hero image here or adjust path if needed

export default function Hero() {
  return (
    <section id="home" className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left Content */}
      <div className="space-y-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
          Build Your Ideal <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-600 to-purple-600">
            Development Stack
          </span>
        </h1>
        <p className="text-gray-600 text-base sm:text-lg max-w-xl leading-relaxed">
          Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#technologies"
            className="bg-pink-600 hover:bg-pink-700 text-white font-medium px-6 py-3 rounded-full shadow-md transition duration-200"
          >
            Explore Technologies
          </a>
          <button className="border border-gray-300 hover:border-gray-400 text-gray-700 font-medium px-6 py-3 rounded-full transition duration-200">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Graphic / 3D Image */}
      <div className="flex justify-center">
        <img
          src={heroImage}
          alt="Development Stack 3D Graphic"
          className="w-full max-w-md lg:max-w-lg object-contain drop-shadow-xl"
        />
      </div>
    </section>
  );
}