import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaMapMarkedAlt,
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className="py-20 bg-gray-600"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Get In
          <span className="text-purple-600"> Touch</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Have a project in mind or want to collaborate ? let's talk
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto ">
          <div>
            <form
              action="https://formspree.io/f/xyzbppgj"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-gray-300">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name" // 👈 Added
                  required
                  className="w-full bg-gray-600 border border-gray-800 rounded-lg px-4 py-3 outline-none mt-2"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email" // 👈 Added
                  required
                  className="w-full bg-gray-600 border border-gray-800 rounded-lg px-4 py-3 outline-none mt-2"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message" // 👈 Added
                  required
                  className="w-full h-40 bg-gray-600 border border-gray-800 rounded-lg px-4 py-3 outline-none mt-2"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-purple-600 rounded-lg font-medium hover:bg-purple-800 transition duration-300 cursor-pointer"
              >
                Send
              </button>
            </form>
          </div>
          {/* contact information  */}
          <div className="space-y-8 mt-2">
            <div className="flex items-start">
              <div className="text-purple-600 text-2xl mr-4">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-gray-400">Faisalabad</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-purple-600 text-2xl mr-4">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-400">umern7833@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-purple-600 text-2xl mr-4">
                <FaPhone />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-gray-400">+92 3156849556</p>
              </div>
            </div>
            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-4">Fellow me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center text-purple-500 hover:bg-purple-700 hover:text-white transition duration-300"
                >
                  <FaGithub className="size-8" />
                </a>
                <a
                  href="https://www.linkedin.com/in/umer-nazir-589a82339/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center text-pink-500 hover:bg-purple-700 hover:text-white transition duration-300"
                >
                  <FaLinkedin className="size-8" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center text-blue-500 hover:bg-purple-700 hover:text-white transition duration-300"
                >
                  <FaFacebook className="size-8" />
                </a>
                <a
                  href="https://wa.me/923156849556?text=Hello%20Umer!%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect.
                         "
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center text-yellow-500 hover:bg-purple-700 hover:text-white transition duration-300"
                >
                  <FaWhatsapp className="size-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
