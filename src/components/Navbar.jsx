import React, { useState } from "react";
import { Link } from "react-scroll";
import { GiPartyPopper } from "react-icons/gi";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => setNavOpen(!navOpen);

  const navLinks = ["home", "about", "services", "work", "contact"];

  // Mobile menu slide
  const menuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1 },
    exit: { height: 0, opacity: 0 },
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-pink-400 to-purple-500 shadow">
      <div className="flex justify-between items-center  px-4 py-4 max-w-7xl mx-auto">

        {/* Fancy brand */}
        <motion.div
          className="text-2xl font-bold text-white hover:text-yellow-400 transition duration-500 cursor-pointer ease-in-out flex items-center gap-2 relative"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Left icon with wiggle */}
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 2,
              ease: "easeInOut",
            }}
          >
            <GiPartyPopper size={40} />
          </motion.div>

          ArchBalloonDecor

          {/* Right icon with same wiggle, mirrored */}
          <motion.div
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 2,
              ease: "easeInOut",
            }}
          > 
            <GiPartyPopper  size={40}/>
          </motion.div>
        </motion.div>

        {/* Desktop links */}
        <ul className="hidden md:flex space-x-6 text-white">
          {navLinks.map((section) => (
            <motion.li
              key={section}
              whileHover={{ scale: 1.1 }}
              className="relative"
            >
              <Link
                to={section}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-yellow-300"
              >
                <span className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <motion.div
          className="md:hidden text-white text-3xl cursor-pointer"
          onClick={toggleNav}
          animate={{ rotate: navOpen ? 90 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {navOpen ? <HiX /> : <HiMenu />}
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {navOpen && (
          <motion.ul
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden flex flex-col items-center overflow-hidden bg-gradient-to-r from-pink-400 to-purple-500 text-white space-y-4 pb-4"
          >
            {navLinks.map((section) => (
              <motion.li
                key={section}
                whileHover={{ scale: 1.1 }}
                className="relative"
              >
                <Link
                  to={section}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setNavOpen(false)}
                  className="block cursor-pointer transition-colors duration-300 ease-in-out hover:text-yellow-300 text-lg"
                >
                  <span className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </span>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
