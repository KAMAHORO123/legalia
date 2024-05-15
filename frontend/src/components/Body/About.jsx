import React from 'react';
import us from '../../assets/us.png';
import australia from '../../assets/australia.png';

const About = () => {
  return (
    <div className="bg-blue-600 bg-opacity-10" id='about'>
      <div className="text-center">
        <h2 className=" text-blue-900 text-4xl font-bold mb-20 pt-20">About Us</h2>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-start lg gap-16">
        <div className="lg:w-4/5">
          <h2 className=" ml-1 mx-14 text-blue-900 text-2xl font-bold mb-2 pl-52">Freight Company with a Difference Innovation</h2>
          <p className="mb-4 pl-52">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar amet risus pretium auctor.</p>
          <h1 className="text-blue-700 text-1xl font-bold mb-2 pl-52">Managing Director</h1>
          <p className='pl-52 text-sm text-gray-500'>United States</p>
        </div> 
        
        <div className="flex flex-col lg:flex-row lg:gap-10 pl-48">
          <div className="mb-4 lg:w-1/3">
            <img src={us} alt="us" className=" h-30 w-80 mb-2" />
            <h2 className="text-lg font-bold mb-2">United States</h2>
            <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum.</p>
            <button className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center">&gt;</button>
          </div>
          <div className="lg:w-1/3">
            <img src={australia} alt="australia" className="w-full mb-2" />
            <h2 className="text-lg font-bold mb-2">Australia</h2>
            <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum.</p>
            <button className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center">&gt;</button>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default About;
