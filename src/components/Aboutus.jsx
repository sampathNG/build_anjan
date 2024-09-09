import React from "react";

const Aboutus = () => {
  return (
    <div id="aboutus">
      {/* Main About Us Section */}
      <div className="bg-gray-500 min-h-screen flex flex-col items-center justify-center py-20">
        <section>
          <div className="max-w-4xl mx-auto p-6 bg-gray-300 shadow-lg rounded-lg">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
              About Us
            </h1>
            <p className="text-center text-gray-600 mb-8">
              We are a team of dedicated professionals committed to delivering
              top-notch services and solutions to our clients. Here are some key
              aspects that define our company:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="h-4 w-4 flex items-center justify-center bg-indigo-500 text-white rounded-full">
                  <span>1</span>
                </div>
                <p className="ml-4 text-gray-700 text-lg">
                  More than 12 years of experience in the building industry.
                </p>
              </li>
              <li className="flex items-start">
                <div className="h-4 w-4 flex items-center justify-center bg-indigo-500 text-white rounded-full">
                  <span>2</span>
                </div>
                <p className="ml-4 text-gray-700 text-lg">
                  Headquartered in Bangalore.
                </p>
              </li>
              <li className="flex items-start">
                <div className="h-4 w-4 flex items-center justify-center bg-indigo-500 text-white rounded-full">
                  <span>3</span>
                </div>
                <p className="ml-4 text-gray-700 text-lg">
                  Completed various residential projects.
                </p>
              </li>
              <li className="flex items-start">
                <div className="h-4 w-4 flex items-center justify-center bg-indigo-500 text-white rounded-full">
                  <span>4</span>
                </div>
                <p className="ml-4 text-gray-700 text-lg">
                  Team of highly experienced tradesmen and construction
                  contractors.
                </p>
              </li>
              <li className="flex items-start">
                <div className="h-4 w-4 flex items-center justify-center bg-indigo-500 text-white rounded-full">
                  <span>5</span>
                </div>
                <p className="ml-4 text-gray-700 text-lg">
                  Strong management team.
                </p>
              </li>
              <li className="flex items-start">
                <div className="h-4 w-4 flex items-center justify-center bg-indigo-500 text-white rounded-full">
                  <span>6</span>
                </div>
                <p className="ml-4 text-gray-700 text-lg">
                  Innovative work culture.
                </p>
              </li>
              <li className="flex items-start">
                <div className="h-4 w-4 flex items-center justify-center bg-indigo-500 text-white rounded-full">
                  <span>7</span>
                </div>
                <p className="ml-4 text-gray-700 text-lg">
                  Progressive vision.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* Milestones Section */}
        <section className="text-gray-400 bg-gray-900 body-font mt-24">
          <center className="font-bold text-3xl mt-12">
            Anjan Company Milestones
          </center>
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                1
              </div>
              <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div className="flex-shrink-0 w-24 h-24 bg-gray-800 text-indigo-400 rounded-full inline-flex items-center justify-center">
                  <svg
                    className="h-9 w-9"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8"></path>
                    <line x1="13" y1="7" x2="13" y2="7.01"></line>
                    <line x1="17" y1="7" x2="17" y2="7.01"></line>
                    <line x1="17" y1="11" x2="17" y2="11.01"></line>
                    <line x1="17" y1="15" x2="17" y2="15.01"></line>
                  </svg>
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-medium title-font text-white mb-1 text-xl">
                    2012
                  </h2>
                  <p className="leading-relaxed">
                    Incorporated by Founders Sasha &amp; Sudheer
                  </p>
                </div>
              </div>
            </div>

            <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                2
              </div>
              <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div className="flex-shrink-0 w-24 h-24 bg-gray-800 text-indigo-400 rounded-full inline-flex items-center justify-center">
                  <svg
                    className="h-9 w-9"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8"></path>
                    <line x1="13" y1="7" x2="13" y2="7.01"></line>
                    <line x1="17" y1="7" x2="17" y2="7.01"></line>
                    <line x1="17" y1="11" x2="17" y2="11.01"></line>
                    <line x1="17" y1="15" x2="17" y2="15.01"></line>
                  </svg>
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-medium title-font text-white mb-1 text-xl">
                    2015
                  </h2>
                  <p className="leading-relaxed">First Residential Project</p>
                </div>
              </div>
            </div>

            <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                3
              </div>
              <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div className="flex-shrink-0 w-24 h-24 bg-gray-800 text-indigo-400 rounded-full inline-flex items-center justify-center">
                  <svg
                    className="h-9 w-9"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8"></path>
                    <line x1="13" y1="7" x2="13" y2="7.01"></line>
                    <line x1="17" y1="7" x2="17" y2="7.01"></line>
                    <line x1="17" y1="11" x2="17" y2="11.01"></line>
                    <line x1="17" y1="15" x2="17" y2="15.01"></line>
                  </svg>
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-medium title-font text-white mb-1 text-xl">
                    2018
                  </h2>
                  <p className="leading-relaxed">Expansion into New Markets</p>
                </div>
              </div>
            </div>

            <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                4
              </div>
              <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div className="flex-shrink-0 w-24 h-24 bg-gray-800 text-indigo-400 rounded-full inline-flex items-center justify-center">
                  <svg
                    className="h-9 w-9"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8"></path>
                    <line x1="13" y1="7" x2="13" y2="7.01"></line>
                    <line x1="17" y1="7" x2="17" y2="7.01"></line>
                    <line x1="17" y1="11" x2="17" y2="11.01"></line>
                    <line x1="17" y1="15" x2="17" y2="15.01"></line>
                  </svg>
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-medium title-font text-white mb-1 text-xl">
                    2021
                  </h2>
                  <p className="leading-relaxed">
                    Achieved Milestone of 100 Projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission and Vision Section */}

        <section className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center bg-gray-800">
          {/* Mission Section */}
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Mission
            </h1>
            <p className="mb-8 leading-relaxed justify-center items-center">
              To provide our customers with valued construction solutions using
              our expertise in the design, manufacture &amp; installation of
              building components, Transform the way people perceive 'Quality'
            </p>
          </div>

          {/* Vision Section */}
          <div className="p-7 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Vision
            </h1>
            <div>
              <div className="flex p-4">
                <svg
                  className="h-8 w-8 text-slate-400 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                Be Global
              </div>

              <div className="flex p-4">
                <svg
                  className="h-8 w-8 text-slate-400 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                Be Fast
              </div>

              <div className="flex p-4">
                <svg
                  className="h-8 w-8 text-slate-400 mr-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z"></path>
                  <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5"></path>
                  <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5"></path>
                  <line x1="16" y1="21" x2="16" y2="19"></line>
                  <line x1="19" y1="16" x2="21" y2="16"></line>
                  <line x1="3" y1="8" x2="5" y2="8"></line>
                  <line x1="8" y1="3" x2="8" y2="5"></line>
                </svg>
                Be Connected
              </div>
            </div>
          </div>

          {/* Certificate Section */}
          {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 h-72 items-center">
            <h1 className="text-2xl mb-8 font-extrabold text-center text-wrap">
              Anjan Company Incorporation Certificate
            </h1>
            <div
              className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 h-72 rounded-xl bg-contain bg-no-repeat certificate"
              style={{
                backgroundImage:
                  'url("https://www.chokseychem.com/wp-content/uploads/2018/10/shapporji-safe-613x675.jpg")',
              }}
            ></div>
          </div> */}
          {/*  */}
          <div className="lg:max-w-lg md:w-1/2 w-full h-72 flex flex-col items-center">
            <h1 className="text-2xl mb-8 font-extrabold text-center text-wrap">
              Anjan Company Incorporation Certificate
            </h1>
            <img
              className="h-1/2"
              src="https://www.chokseychem.com/wp-content/uploads/2018/10/shapporji-safe-613x675.jpg"
              alt="certificate"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Aboutus;
