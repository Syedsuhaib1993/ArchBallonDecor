import React from "react";
import img_about from "../assets/circle.png";
import img_about1 from "../assets/camera.png";
import img_about2 from "../assets/hero1.png";
import bgAbout from "../assets/about.png"; // ✅ your background image path

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 text-white overflow-hidden relative"
    >
      {/* BACKGROUND IMAGE LAYER */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${bgAbout})` }}
      >
        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-pink-500 to-purple-600 opacity-80"></div>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* LEFT: Overlapping Images */}
        <div className="flex flex-wrap justify-center gap-4 relative">
          {/* Decorative gradient circle */}
          <div className="absolute w-60 h-60 bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 rounded-full blur-3xl opacity-50 -top-10 -left-10 z-0"></div>

          {/* Image stack */}
          <img
            src={img_about1}
            alt="Balloon decor 1"
            className="absolute -top-4 left-8 sm:left-16 w-24 h-24 sm:w-32 sm:h-32 rounded-full  object-cover z-20"
          />
          <img
            src={img_about2}
            alt="Balloon decor 2"
            className="relative w-36 h-60 sm:w-48 sm:h-64 md:w-72 md:h-[560px] rounded-3xl shadow-2xl object-cover z-10"
          />
          <img
            src={img_about}
            alt="Balloon decor 3"
            className="absolute bottom-0 right-10 sm:right-20 w-20 h-20 sm:w-32 sm:h-32 rounded-full  object-cover z-20"
          />
        </div>

        {/* RIGHT: Text Content */}
        <article className="text-center lg:text-left relative z-10">
          {/* Decorative blur behind text */}
          <div className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-yellow-300 rounded-full blur-3xl opacity-30 -top-5 -left-10"></div>

          <header className="relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
              About Us
            </h1>
          </header>

          <p className="relative z-10 text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed max-w-xl">
            Abdul Rahim Ismail (CEO)  is the creative force behind BalloonDecor — a visionary
            event designer and a professional photographer with a keen eye for
            capturing life’s most joyful moments. With years of experience
            transforming spaces with stunning balloon arrangements, they combine
            artistic flair and technical skill to make every event
            picture-perfect, both in decor and in memories.
          </p>

          <footer className="relative z-10">
            <button
              className="inline-flex border-2 py-2 px-6 rounded-full text-white text-sm sm:text-lg font-semibold 
              focus:outline-none transition duration-300 ease-in-out 
              hover:bg-yellow-300 hover:text-purple-900 hover:shadow-[0_0_40px_rgba(255,221,0,0.7)]"
            >
              Explore more
            </button>
          </footer>
        </article>
      </div>
    </section>
  );
};

export default About;
