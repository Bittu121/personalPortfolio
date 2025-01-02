import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import profileImage from "../../images/profileImage.png";
import { Link } from "react-scroll";

function Home() {
  return (
    <div
      id="Home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800 via-black"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-center h-full px-4">
        <div className="flex flex-col justify-center h-full md:w-1/2">
          <h2 className="text-white text-4xl sm:text-5xl font-bold">
            I'm a Mern Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I build and design web applications using React, Tailwind, Next.js,
            MongoDB, Node.js, and Express.js. I recently completed a MERN stack
            developer internship at Applore Technologies to enhance my
            full-stack development skills.
          </p>
          <Link to="portfolio" smooth duration={500}>
            <div
              style={{
                position: "relative",
                display: "inline-block",
                padding: "2px",
                borderRadius: "8px",
                background:
                  "linear-gradient(90deg, cyan, cyan 25%, transparent 50%, cyan 75%)",
                backgroundSize: "200% 200%",
                animation: "moveBorder 2s linear infinite",
              }}
            >
              <button
                style={{
                  position: "relative",
                  zIndex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "transparent",
                  color: "white",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  border: "none",
                  overflow: "hidden",
                  background: "linear-gradient(to right, #007bff, #0056b3)",
                }}
              >
                Portfolio
                <span
                  style={{
                    marginLeft: "8px",
                    transition: "transform 0.3s",
                  }}
                  className="group-hover:translate-x-1 hover:rotate-90"
                >
                  <MdKeyboardArrowRight size={30} />
                </span>
              </button>
            </div>
            <style>
              {`
          @keyframes moveBorder {
            0% {
              background-position: 0% 50%;
            }
            100% {
              background-position: 100% 50%;
            }
          }
        `}
            </style>
          </Link>
        </div>
        <div className="md:w-1/2" style={{ marginTop: "6rem" }}>
          <img
            src={profileImage}
            alt="my-picture"
            className="rounded-2xl mx-auto w-1/2 md:w-3/5 lg:w-2/3 animate-pulse"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
