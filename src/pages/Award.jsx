import React from "react";

export const Award = () => {
  return (
    <div>
      <div className="container mx-auto px-5 py-24">
        <h1 className="sm:text-3xl text-2xl font-medium text-center title-font mb-4 text-white">
          Advertise &amp; Award
        </h1>
        <p className="leading-relaxed text-base text-center mb-12">
          Our Advertise &amp; Award services ensure that the bidding process is
          transparent, competitive, and results in the selection of the best
          contractors for your project.
        </p>
        <div className="flex flex-wrap">
          <div className="p-4 md:w-1/2 w-full ">
            <div className="h-full bid1 bg-cover bg-gray-800 bg-opacity-40 px-8 pt-8 pb-16 rounded-lg overflow-hidden text-center relative">
              <h2 className="title-font sm:text-2xl text-xl font-bold text-black mb-4">
                Advertise for Bids
              </h2>
              <p className="leading-relaxed mb-6 text-gray-900 font-medium">
                We manage the entire bid advertisement process, ensuring that
                your project reaches qualified contractors through the most
                effective channels.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bid2 bg-cover bg-gray-800 bg-opacity-40 px-8 pt-8 pb-16 rounded-lg overflow-hidden text-center relative">
              <h2 className="title-font sm:text-2xl text-xl font-bold text-black mb-4">
                Evaluate Bids
              </h2>
              <p className="leading-relaxed mb-6 text-gray-900 font-medium">
                Our experts carefully evaluate each bid to ensure it meets all
                technical and financial requirements, guaranteeing the best
                value for your project.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bid3 bg-cover bg-gray-800 bg-opacity-40 px-8 pt-8 pb-16 rounded-lg overflow-hidden text-center relative">
              <h2 className="title-font sm:text-2xl text-xl font-bold text-black mb-4">
                Award Contract
              </h2>
              <p className="leading-relaxed mb-6 text-gray-900 font-medium">
                After thorough evaluation, we assist in awarding the contract to
                the most suitable bidder, ensuring all terms and conditions are
                clearly defined and agreed upon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
