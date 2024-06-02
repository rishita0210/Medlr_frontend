import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-hero-bg bg-cover bg-center text-white h-600">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-end h-full py-20 backdrop-filter backdrop-brightness-75">
        <div className="lg:w-1/2 px-6 lg:px-0 mb-10 mr-6 lg:mb-0 text-right">
          <h1 className="text-4xl lg:text-5xl mr-9 font-bold mb-6">Search & Compare Medicine Prices Online</h1>
          <p className="text-lg lg:text-xl mr-9 mb-6">Save Upto 72% On Your Medicine</p>
          <a href="#learn-more" className="bg-white justify-center items-center text-blue-500 mr-9 ml-9 py-2 px-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300">Search Here</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
