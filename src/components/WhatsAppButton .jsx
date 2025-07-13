// ✅ Example: Add this in your App.jsx or Layout.jsx or any page/component
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/923072529558" // Replace with your WhatsApp number in international format
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition transform hover:scale-110"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsAppButton;
