import React from "react";

function About() {
  return (
    <div
      id="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white flex items-center justify-center px-4 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
        <div className="bg-black bg-opacity-50 md:p-8 rounded-lg shadow-lg w-full max-w-full">
          <div className="pb-4">
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold  border-gray-500 text-center">
              About
            </p>
          </div>
          <p className="text-base sm:text-lg md:text-xl mt-6 leading-relaxed text-center">
            I develop web applications using React, Tailwind, Next.js, MongoDB,
            Node.js, and Express.js. I recently completed a MERN stack developer
            internship at Applore Technologies,where I gained hands-on experience in full-stack
            development enhancing my full-stack skills.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
