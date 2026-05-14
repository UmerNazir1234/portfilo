import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="min-h-screen flex items-center pt-20 pb-16 bg-linear-to-r from-[#1a1a1a] via-[#2d2d2d] t0-[#1a1a1a]"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-purple-600">Umer Nazir</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 typewriter">
            Mern Stack Devolper
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Passionate and detail-oriented React & Next.js Developer with 1 year
            of hands-on experience building responsive, scalable, and
            high-performance web applications. Strong understanding of modern
            JavaScript, component-based architecture, and REST API integration.
            Focused on writing clean, maintainable code and delivering
            user-friendly interfaces.
          </p>
          <div className="flex space-x-4">
            <a
              href="#project"
              className="px-6 py-3 bg-purple-500 rounded-lg font-medium hover:bg-purple-700 transition duration-300"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-purple-400
          rounded-lg font-medium hover:bg-purple-600 transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h64 md:w-80 md:h-80">
            <div
              className="absulate inset-0 rounded-full bg-linear-to-r from-purple-500 to-pink-400 animate-slow
        opacity-70"
            >
              <motion.img
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
                className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover z-10 animate-flow"
                src={assets.profileImg}
                alt="profile"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
