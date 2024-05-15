import React from "react";
import achievementsImage from "../../assets/achievements.png";
import plane from "../../assets/plane.png";
import bag from "../../assets/bag.png";
import train from "../../assets/train.png";
import house from "../../assets/house.png";
import globe from "../../assets/globe.png";

const Achievements = () => {
  return (
    <div
       id="achievements"
      className="achievements-container"
      style={{
        backgroundImage: `url(${achievementsImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "650px",
      }}
    >
     <div className="text-center">
        <h2 className=" text-white text-4xl font-bold mt-2 pt-14">Achievements</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 p-8">
        <div className="pt-1 pl-44">
          <h2 className="text-white font-bold text-xl md:text-2xl lg:text-3xl">
            Unmatched <br /> Services <br /> Unmatched <br /> Excellence
          </h2>
          <button className="bg-white text-blue w-10 h-10 rounded-full flex items-center justify-center ml-60">
            &gt;
          </button>
        </div>
        <div className="pl-20 relative">
          <img src={plane} alt="" className="absolute bottom-32 left-24" />
          <p className="border-2 p-8 w-80 h-40 text-white rounded-lg mt-4 relative z-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. .
          </p>
        </div>
        <div>
          <div className="relative">
            <img src={train} alt="" className="absolute bottom-32 left-6" />
            <p className="border p-8 w-80 h-40 text-white rounded-lg mt-4 relative z-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. .
            </p>
          </div>
        </div>
        <div className="relative pl-44">
          <img src={house} alt="" className="absolute bottom-28 left-48" />
          <p className="border p-8 w-80 h-40 text-white rounded-lg mt-4 relative z-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. .
          </p>
        </div>
        <div className="relative pl-20">
          <img src={bag} alt="" className="absolute bottom-38 left-28" />
          <p className="border p-8 w-80 h-40 text-white rounded-lg mt-4 relative z-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. .
          </p>
        </div>
        <div className="relative">
          <img src={globe} alt="" className="absolute bottom-36 left-10" />
          <p className="border p-8 w-80 h-40 text-white rounded-lg mt-4 relative z-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
