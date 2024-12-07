import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Footer = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = currentDate.toLocaleString();

  return (
    <footer className="py-4 bg-[#212831]">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-2">
          <Link
            to="about"
            smooth
            duration={500}
            className="text-blue-600 hover:underline cursor-pointer"
          >
            About
          </Link>
          <Link
            to="contact"
            smooth
            duration={500}
            className="text-blue-600 hover:underline cursor-pointer"
          >
            Contact
          </Link>
          <a href="/privacy" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>
        </div>
        <p className="text-sm text-gray-500">
          <span className="text-lg font-semibold text-blue-500 hover:text-blue-600 transition duration-300 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            {formattedDate}
          </span>{" "}
          &copy;{" "}
          <span className="text-gray-600">
            Your Company. All rights reserved.
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
