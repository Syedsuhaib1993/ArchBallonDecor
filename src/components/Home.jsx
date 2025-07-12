import React from "react";
import { motion } from "framer-motion";
import { IoBalloonOutline } from "react-icons/io5";
import bgImage from "../assets/bg.jpg"; // ✅ your background image

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col md:flex-row items-center justify-center px-4 relative overflow-hidden"
    >
      {/* BACKGROUND IMAGE + GRADIENT OVERLAY */}
      <div
        className="absolute inset-0 bg-cover  bg-center z-0"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-pink-500 to-purple-600 opacity-80"></div>
      </div>

      {/* CONTENT */}
      <div className="md:w-1/2 text-center md:mt-0 mt-20 md:pl-20 md:text-left mb-8 md:mb-0 z-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="md:text-5xl text-3xl font-extrabold text-white mb-4"
        >
          Welcome to{" "}
          <span className="bg-gradient-to-r from-yellow-300 to-pink-300 text-transparent bg-clip-text">
            ArchBalloonDecor
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="md:text-lg text-sm text-center px-0 md:text-left text-white max-w-md"
        >
          ArchBalloonDecor is a creative balloon decoration company dedicated to
          transforming ordinary gatherings into extraordinary celebrations.
          Specializing in custom balloon designs for birthdays, weddings,
          corporate events, and more, we pride ourselves on adding color, joy,
          and a touch of magic to every occasion
        </motion.p>
        <motion.a
          href="#services"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-6 py-3 mt-4 bg-gradient-to-r from-yellow-300 to-pink-400 text-white font-semibold rounded-full shadow-md transition duration-300 ease-in-out hover:from-pink-400 hover:to-yellow-300"
        >
          Explore More
        </motion.a>
      </div>

      {/* BALLOON ICON */}
      <motion.div
        className="md:w-1/2 flex justify-center z-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <IoBalloonOutline className="text-yellow-300 w-40 h-40 md:w-80 md:h-80 drop-shadow-lg" />
      </motion.div>
    </section>
  );
};

export default Home;
