import React from "react";

const projects = [
  {
    id: 1,
    name: "Anjan Iris/Bangalore",
    description: "Residential Apartment",
    price: "15.00 CR",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2022/2/KO/JP/FE/105289461/271619464-1000x1000.jpg", // replace with actual image URL
  },
  {
    id: 2,
    name: "Anjan Woods /Bangalore",
    description: "Residential Apartment",
    price: "5.00 CR",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/10/354379537/PF/DL/ZN/162283999/luxury-villas-500x500.jpg", // replace with actual image URL
  },
  {
    id: 3,
    name: "Anjan Blossom /Bangalore",
    description: "Residential Apartment",
    price: "10.00 CR",
    image:
      "https://5.imimg.com/data5/FG/JA/MY-45852610/luxury-villas-500x500.jpg", // replace with actual image URL
  },
  {
    id: 4,
    name: "Anjan Woods /Bangalore",
    description: "Residential Apartment",
    price: "5.00 CR",
    image:
      "https://static.wixstatic.com/media/0f832a_31738a31bd5b4201bad4d85038d24bb7~mv2.jpeg/v1/fill/w_1018,h_740,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0f832a_31738a31bd5b4201bad4d85038d24bb7~mv2.jpeg", // replace with actual image URL
  },
  {
    id: 5,
    name: "Anjan Blossom /Bangalore",
    description: "Residential Apartment",
    price: "10.00 CR",
    image:
      "https://roofandfloor.thehindu.com/raf/real-estate-blog/wp-content/uploads/sites/14/2018/06/featured2-840x480.jpg", // replace with actual image URL
  },
  {
    id: 6,
    name: "Anjan Iris/Bangalore",
    description: "Residential Apartment",
    price: "15.00 CR",
    image:
      "https://roofandfloor.thehindu.com/raf/real-estate-blog/wp-content/uploads/sites/14/2018/06/Spectrum.jpg", // replace with actual image URL
  },
];

const Projects = () => {
  return (
    <div id="projects" className="bg-indigo-950">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Projects completed
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <div key={project.id} className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  src={project.image}
                  alt={project.name}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-80">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
                    {project.name}
                  </h2>
                  <br />
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.description}
                  </h1>
                  <br />
                  <p className="leading-relaxed text-gray-300">
                    {project.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*  */}
      <center className="font-bold text-3xl text-white">
        On going Projects
      </center>
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap w-full">
          <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  className="h-6 w-6 text-slate-100"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />
                  <line x1="13" y1="7" x2="13" y2="7.01" />
                  <line x1="17" y1="7" x2="17" y2="7.01" />
                  <line x1="17" y1="11" x2="17" y2="11.01" />
                  <line x1="17" y1="15" x2="17" y2="15.01" />
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">
                  Anjan Lakshmi Nivas
                </h2>
                <p className="leading-relaxed">
                  VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk
                  bespoke try-hard cliche palo santo offal.
                </p>
              </div>
            </div>

            {/* Second Item */}
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  className="h-6 w-6 text-slate-100"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1="3" y1="21" x2="21" y2="21" />
                  <line x1="9" y1="8" x2="10" y2="8" />
                  <line x1="9" y1="12" x2="10" y2="12" />
                  <line x1="9" y1="16" x2="10" y2="16" />
                  <line x1="14" y1="8" x2="15" y2="8" />
                  <line x1="14" y1="12" x2="15" y2="12" />
                  <line x1="14" y1="16" x2="15" y2="16" />
                  <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" />
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">
                  Anjan Orchid
                </h2>
                <p className="leading-relaxed">
                  Vice migas literally kitsch +1 pok pok. Truffaut hot chicken
                  slow-carb health goth, vape typewriter.
                </p>
              </div>
            </div>

            {/* Third Item */}
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="5" r="3"></circle>
                  <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">
                  Anjan Tulip
                </h2>
                <p className="leading-relaxed">
                  Coloring book narwhal glossier master cleanse umami. Salvia +1
                  master cleanse blog taiyaki.
                </p>
              </div>
            </div>

            {/* Fourth Item */}
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  className="h-6 w-6 text-slate-100"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1="4" y1="20" x2="20" y2="20" />
                  <line x1="9.4" y1="10" x2="14.6" y2="10" />
                  <line x1="7.8" y1="15" x2="16.2" y2="15" />
                  <path d="M6 20l5 -15h2l5 15" />
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">
                  Anjan Greens
                </h2>
                <p className="leading-relaxed">
                  VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk
                  bespoke try-hard cliche palo santo offal.
                </p>
              </div>
            </div>

            {/* Fifth Item */}
            <div className="flex relative">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">
                  Anjan Greens
                </h2>
                <p className="leading-relaxed">
                  Pitchfork ugh tattooed scenester echo park gastropub whatever
                  cold-pressed retro.
                </p>
              </div>
            </div>
          </div>

          {/* Construction Image */}
          <div className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12">
            {/* Add your image or other content here */}
            <img
              className="h-[90vh] w-3/4 ml-32"
              src="https://wallpaper.forfun.com/fetch/6f/6f93bdbf338f6b8059c45fb9402d306f.jpeg"
              alt="on going project image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
