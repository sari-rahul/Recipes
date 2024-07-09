import React from 'react';
import backgroundImage from '../assets/root_background.jpg';

const Root = () => {
  return (
    <section
    className="relative bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${backgroundImage})` }}
    >
    <div
        className="absolute inset-0 bg-black opacity-60"
    ></div>
    <div
        className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
    ></div>

    <div
        className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
    >
        <div className="max-w-xl  ltr:sm:text-left rtl:sm:text-right">
        <h2 className="text-3xl font-extrabold text-white sm:text-5xl">
            Spice Up Your Life
            <strong className="block font-extrabold text-rose-500">   Start Cooking with Us! </strong>
        </h2>
        <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
        Ready to elevate your culinary skills? Explore our mouthwatering recipes and start cooking with us today!
        </p>
        <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
            href="#"
            className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
            Get Started
            </a>

            <a
            href="#"
            className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
            Learn More
            </a>
        </div>
        </div>
    </div>
    </section>
  )
}

export default Root
