import React from "react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/design");
  };
  const handleAward = () => {
    navigate("/award");
  };
  return (
    <div
      id="services"
      className="container px-5 py-24 mx-auto bg-indigo-950 w-full"
    >
      <h1 className="sm:text-3xl text-2xl font-medium text-center py-16 title-font text-white">
        Our Services
      </h1>
      <div className="flex flex-wrap justify-center lg:justify-start -m-4">
        <div className="p-4 lg:w-1/3 w-full">
          <div className="h-96 w-full bg-gray-800 bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
            <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">
              Planning
            </h1>
            <p className="leading-relaxed mb-3 text-gray-400">
              › Project start up <br />› Scoping &amp; budget <br />› Conceptual
              Design
            </p>
            <>
              <a
                href="/planning"
                className="text-indigo-400 inline-flex items-center hover:cursor-pointer"
              >
                Read More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </>
          </div>
        </div>
        <div className="p-4 lg:w-1/3 w-full">
          <div className="h-96 w-full bg-gray-800 bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
            <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">
              Programing &amp; Preliminary Design
            </h1>
            <p className="leading-relaxed mb-3 text-gray-400">
              › Feasibility study <br />› Funding approval <br />› Environmental
              clearance <br />› Preliminary design &amp; approval
            </p>
            <a
              // href="/design"
              // href="/planning"
              onClick={handleClick}
              className="text-indigo-400 inline-flex items-center hover:cursor-pointer"
            >
              Read More
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="p-4 lg:w-1/3 w-full">
          <div className="h-96 w-full bg-gray-800 bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
            <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">
              Advertise &amp; Award
            </h1>
            <p className="leading-relaxed mb-3 text-gray-400">
              › Advertise for bids <br />› Evaluate bids <br />› Award contract
            </p>
            <a
              // href="/award"
              // href="/planning"
              onClick={handleAward}
              className="text-indigo-400 inline-flex items-center hover:cursor-pointer"
            >
              Read More
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
