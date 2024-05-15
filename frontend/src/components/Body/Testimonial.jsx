import React from "react";
import light from '../../assets/light.png'

const Testimonial = () => {
  return (
    <div className="bg-white relative" id="testimonial">
      {/* Titles and Readmore */}
      <div className="flex flex-col items-center bg-white py-5 md:py-10 px-5 md:px-20 text-center"> {/* Adjusted padding */}
        <h2 className="text-lg md:text-4xl font-bold mb-2 md:mb-4 text-blue-900 max-w-md md:max-w-3xl">
          Testimonial
        </h2>
      </div>
      {/* Images */}
      <div className="flex flex-col md:flex-row justify-center md:gap-20 relative">
        <div className="relative mb-8 md:mb-0 w-full md:w-auto md:max-w-[300px]"> {/* Adjusted width */}
          <img src={light} alt="" className="w-full h-full" /> {/* Adjusted width and height */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="rounded-lg mt-40 bg-blue-50  shadow-md max-w-[300px] p-4  mx-auto md:mx-5"> {/* Adjusted margin */}
              <p className="text-center max-w-md md:max-w-2xl text-gray-500">
              Revamping the Membership Model with Triathlon Australia
              </p>
              <div className="flex items-center justify-center mt-4">
                <p className="text-blue-600 font-light">Readmore</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-500 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* Repeat the above div structure for other images */}
        <div className="relative mb-8 md:mb-0 w-full md:w-auto md:max-w-[300px]"> {/* Adjusted width */}
          <img src={light} alt="" className="w-full h-full" /> {/* Adjusted width and height */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="rounded-lg mt-40 bg-blue-50 shadow-md max-w-[300px] p-5 mx-auto md:mx-5"> {/* Adjusted margin */}
              <p className="text-center max-w-md md:max-w-2xl text-gray-500">
              Revamping the Membership Model with Triathlon Australia
              </p>
              <div className="flex items-center justify-center mt-4">
                <p className="text-blue-600 font-light">Readmore</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-500 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* Repeat the above div structure for the third image */}
        <div className="relative w-full md:w-auto md:max-w-[300px]"> {/* Adjusted width */}
          <img src={light} alt="" className="w-full h-full" /> {/* Adjusted width and height */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="rounded-lg mt-40 bg-blue-50 shadow-md max-w-[300px] p-5  mx-auto md:mx-5"> {/* Adjusted margin */}
              <p className="text-center max-w-md md:max-w-2xl text-gray-500">
              Revamping the Membership Model with Triathlon Australia
              </p>
              <div className="flex items-center justify-center mt-4">
                <p className="text-blue-600 font-light ">Readmore</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-500 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br /><br /><br /><br /><br /><br />
    </div>
  );
};

export default Testimonial;
