import React from "react";

export const Design = () => {
  return (
    <div>
      <div className="container mx-auto px-5 py-24">
        <h1 className="sm:text-3xl text-2xl font-medium text-center title-font mb-4 text-white">
          Programming &amp; Preliminary Design
        </h1>
        <p className="leading-relaxed text-base text-center mb-12">
          Our Programming &amp; Preliminary Design services provide a
          comprehensive approach to project planning, ensuring that every aspect
          is thoroughly considered and executed with precision.
        </p>
        <div className="flex flex-wrap">
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-72 bg-gray-800 text-white font-bold bg-opacity-40 px-8 pt-8 pb-16 rounded-lg overflow-hidden text-center relative const1"></div>
          </div>
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-72 bg-gray-800 bg-opacity-40 px-8 pt-8 pb-16 rounded-lg overflow-hidden text-center relative const2"></div>
          </div>
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-72 const3 bg-cover bg-gray-800 bg-opacity-40 px-8 pt-8 pb-16 rounded-lg overflow-hidden text-center relative"></div>
          </div>
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-72 const4 bg-gray-800 bg-opacity-40 px-8 pt-8 pb-16 rounded-lg overflow-hidden text-center relative"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
