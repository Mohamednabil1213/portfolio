"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="pl-5 lg:py-16 bg-[#0f0f0f]">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-5xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={["Mohamed Nabil", 1000, "Front-End Developer", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-gray-300 text-base sm:text-lg mb-6 lg:text-xl">
            I’m a front-end developer passionate about building responsive and
            interactive user experiences using React, Next.js, and modern web
            technologies.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-700 to-cyan-500 hover:bg-blue-900 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="https://drive.google.com/file/d/1vNLq2-8F-kaK2qIXr4UQ_9fUH7TbsQNy/view?usp=sharing"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-700 to-cyan-500 hover:bg-blue-900 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-blue-900 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
            <Image
              src="/images/hero.png"
              alt="hero image"
              fill
              className="object-cover rounded-full transition duration-300 hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
