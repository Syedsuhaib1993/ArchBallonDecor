import React from "react";
import bgServices from "../assets/services.png"; // Adjust your image path

const Services = () => {
  return (
    <section
      id="services"
      className="relative w-full min-h-screen flex flex-col items-center justify-center p-8 overflow-hidden"
    >
      {/* ✅ FULLSCREEN BACKGROUND IMAGE */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${bgServices})`,
          backgroundPosition: "center 100px", // Shifts image down by 100px
        }}
      >
        {/* ✅ GRADIENT OVERLAY */}
        <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-br from-pink-500 via-pink-600 to-purple-700 opacity-80"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl">
        <h2 className="text-4xl font-bold mb-4 text-transparent bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-center">
          Our Services
        </h2>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            "Birthday Parties",
            "Engagements",
            "Nikkah Cermony",
            "Aqeeqah Ceremony",
            "Baby Shower",
            "Anniverseries",
          ].map((service) => (
            <li
              key={service}
              className="bg-white/60 backdrop-blur p-6 rounded shadow hover:shadow-lg transition text-center"
            >
              <h3 className="text-2xl font-semibold mb-2 text-pink-700">
                {service}
              </h3>
              <p className="text-gray-700">
                Beautiful and customized balloon decorations for{" "}
                {service.toLowerCase()}.
              </p>
            </li>
          ))}
        </ul>

        {/* ✅ CUSTOMIZE YOUR PACKAGE SECTION */}
        <div className="bg-white/70 backdrop-blur p-8 rounded-lg shadow-md text-center">
          <h3 className="text-3xl font-bold mb-4 text-purple-800">
            Customize Your Package
          </h3>
          <p className="text-gray-700 sm:text-base text-sm mb-4">
            Our basic package includes Circular frame , Square frame, Balloons,
            and a special message. You can choose from our various packages to
            suit your Event. A Neon Light frame to Describe your Event in an
            Aesthetic Look Three Sides Tables , 2 on each sides with
            decorations, one at the center with the cake stand
          </p>

          <a href="#work">
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full shadow hover:shadow-lg transition">
              See Our Work
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
