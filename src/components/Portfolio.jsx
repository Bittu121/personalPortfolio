import React from "react";
import BuddyApp from "../images/BuddyApp.png";
import CrudApp from "../images/CrudApp.png";
import AlgoVisualizerApp from "../images/AlgorithmVisulizerApp.png";
import QEats from "../images/QEats.png";
import QEatsAdmin from "../images/QEatsAdmin.png";
function Portfolio() {
  const portfolio = [
    {
      id: 1,
      src: QEats,
      demo: "https://fooddeliveryapp-frontend-zn5z.onrender.com",
      code: "https://github.com/Bittu121/FoodDeliveryApp/tree/main/client",
    },
    {
      id: 2,
      src: QEatsAdmin,
      demo: "https://fooddeliveryapp-admin-fm6s.onrender.com",
      code: "https://github.com/Bittu121/FoodDeliveryApp/tree/main/admin",
    },
    {
      id: 3,
      src: AlgoVisualizerApp,
      demo: "https://lively-gnome-7de8ae.netlify.app",
      code: "https://github.com/Bittu121/AlgorithmVisualizer",
    },
    {
      id: 4,
      src: CrudApp,
      demo: "https://crudapreeminent-daifuku-f68aa4.netlify.app",
      code: "https://github.com/Bittu121/client/tree/main/src/components",
    },
    {
      id: 5,
      src: BuddyApp,
      demo: "https://silly-scone-9e187b.netlify.app",
      code: "https://github.com/Bittu121/Buddy-App",
    },
  ];

  const handleButtonClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <div
        id="portfolio"
        className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full mt-[-4rem]">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500 animate-pulse">
              Portfolio
            </p>
            <p className="py-6">Check out some of my work right here</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {portfolio.map(({ id, src, demo, code }) => (
              <div
                key={id}
                className="shadow-md shadow-gray-600 rounded-lg overflow-hidden group"
              >
                <div className="relative">
                  <img
                    src={src}
                    alt={`Project ${id}`}
                    className="rounded-md duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-center mt-4">
                  <button
                    onClick={() => handleButtonClick(demo)}
                    className="w-1/2 px-6 py-3 m-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all duration-300 hover:shadow-[0px_5px_15px_rgba(72,187,255,0.5)]"
                  >
                    Demo
                  </button>
                  <button
                    onClick={() => handleButtonClick(code)}
                    className="w-1/2 px-6 py-3 m-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all duration-300 hover:shadow-[0px_5px_15px_rgba(72,187,255,0.5)]"
                  >
                    Code
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
