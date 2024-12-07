import React from "react";
import reactjs from "../images/reactjs.png";
import javaScript from "../images/JavaScript.png";
import nodejs from "../images/nodejs.png";
import mongodb from "../images/mongodb.png";
import tailwindcss from "../images/tailwind.png";
import materialUI from "../images/materialUI.png";
import cpp from "../images/cpp.png";

function Experience() {
  const technologies = [
    {
      id: 1,
      src: reactjs,
      title: "ReactJS",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: javaScript,
      title: "JavaScript",
      style: "shadow-sky-500",
    },
    {
      id: 3,
      src: nodejs,
      title: "NodeJS",
      style: "shadow-pink-400",
    },
    {
      id: 4,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-white",
    },
    {
      id: 5,
      src: tailwindcss,
      title: "TailwindCSS",
      style: "shadow-white",
    },
    {
      id: 6,
      src: materialUI,
      title: "materialUI",
      style: "shadow-white",
    },
    {
      id: 7,
      src: cpp,
      title: "C++",
      style: "shadow-white",
    },
  ];

  return (
    <div
      id="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen pt-12"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-4 text-lg">
            These are the technologies I have worked with:
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 text-center py-8 px-6 sm:px-0">
          {technologies.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-inner hover:scale-105  slow-bounce transform transition-all duration-300 ease-in-out py-6 rounded-lg ${style}`}
            >
              <img src={src} alt={`${title}-icon`} className="w-20 mx-auto" />
              <p className="mt-4 font-bold">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
