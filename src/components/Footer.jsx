import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-pink-400 via-pink-500 to-purple-600 text-white pt-8">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        {/* Logo + Socials */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h1 className="font-extrabold text-3xl pb-4 tracking-wide">
            ArchBalloonDecor
          </h1>
          <div className="flex gap-4 flex-row py-2">
            <a href=" https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=xn5gn1u" target="_blank">
              <FaInstagram
                size={30}
                className="hover:-translate-y-2 transition duration-200 ease-in-out cursor-pointer"
              />
            </a>
            <a href="https://www.facebook.com/share/1BJsQVepcb/" target="_blank">
              <FaFacebook
                size={30}
                className="hover:-translate-y-2 transition duration-200 ease-in-out cursor-pointer"
              />
            </a>
            <FaLinkedin
              size={30}
              className="hover:-translate-y-2 transition duration-200 ease-in-out cursor-pointer"
            />
          </div>
          <p className="text-sm mt-4">
            Stay connected with us through social media! Follow for the latest
            decor trends, deals, and stunning event inspiration.
          </p>
        </div>

        {/* Important Links */}
        <div className="mb-6 md:mb-0">
          <h1 className="font-bold text-2xl pb-4">Quick Links</h1>
          <div className="flex flex-col gap-2 font-medium">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-yellow-200 transition duration-200 ease-in-out"
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-yellow-200 transition duration-200 ease-in-out"
            >
              About Us
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-yellow-200 transition duration-200 ease-in-out"
            >
              Services
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-yellow-200 transition duration-200 ease-in-out"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h1 className="font-bold text-2xl pb-4">Contact Us</h1>
          <div className="flex flex-col gap-2 font-medium">
            <p className="hover:text-yellow-200 transition duration-200 ease-in-out cursor-pointer">
              +92 307 2529558
            </p>
            <p className="hover:text-yellow-200 transition duration-200 ease-in-out cursor-pointer">
              info@balloondecor.com
            </p>
            <p className="hover:text-yellow-200 transition duration-200 ease-in-out cursor-pointer">
              Gulshan-e-Iqbal, Karachi
            </p>
          </div>
        </div>
      </div>

      <div className="text-center py-4 border-t border-white/20">
        <p className="text-sm">
          © {new Date().getFullYear()} Developed by{" "}
          <span className="font-bold hover:text-yellow-200 cursor-pointer transition duration-200 ease-in-out">
            SyedSuhaib
          </span>{" "}
          | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
