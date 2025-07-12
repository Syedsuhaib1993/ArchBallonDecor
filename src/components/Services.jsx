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
    backgroundPosition: 'center 100px' // Shifts image down by 100px
  }}
>
        {/* ✅ GRADIENT OVERLAY */}
        <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-br from-pink-500 via-pink-600 to-purple-700 opacity-80"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl">
        <h2 className="text-4xl font-bold mb-4 text-transparent bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-center">
          Our Services
        </h2>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Birthday Parties", "Weddings", "Corporate Events"].map((service) => (
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
      </div>
    </section>
  );
};

export default Services;
