import React from 'react';
import progress from '../../assets/progress.png';
import images from '../../assets/3-images.png';

const Why = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center" id='services'>
      <div className="mb-8">
        <h2 className="text-blue-900 text-4xl font-bold mb-4 pt-8">Why Choose Us</h2>
        <img src={progress} alt="Progress" className="mx-auto pt-10" />
      </div>

      <div className="flex items-center">
        <div className="w-1/2 px-8">
          <img src={images} alt="Images" className="mx-auto pl-28 pt-20" />
        </div>
        <div className="w-1/2 px-40 pt-14">
          <p className="text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. 

          </p>
          <br />
          <p className="text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis.
          </p>
        </div>
      </div>
      <br />
      <br />
      <br /><br />
    </div>
  );
};

export default Why;
