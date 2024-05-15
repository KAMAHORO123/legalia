import React from 'react'
import ai from '../../assets/AI.png'
import banner from '../../assets/rect.png'

function AI() {
  return (
    <div className="relative bg-blue-50" id='product'>
      <h2 className="text-blue-900 font-bold text-4xl text-center pt-16 pb-10">Our AI</h2>
      <img src={ai} alt="" className='pl-52 pt-10' />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-8 rounded-lg pt-80 -mt-40">
        <button className="bg-transparent text-white px-6 py-3 rounded-full shadow-lg mr-4">Get Started</button>
        <h2 className="text-white font-bold text-3xl mb-4">Next-Generation <span className='text-blue-400 font-bold'>Legal</span> Support with AI</h2>
        <p className="text-gray-300 mb-4">Sign Up or Experience AI Consultation Today!</p>
        <button className="bg-transparent text-white px-6 py-3 rounded-full shadow-lg mr-4">Try AI Consultant</button>
        <button className="bg-transparent text-white px-6 py-3 rounded-full shadow-lg">Create Free Account</button>
      </div>
      <div className='bg-blue pl-52 relative'>
  <img src={banner} alt="" />
  <h2 className="text-white font-bold text-3xl absolute top-6 left-56 right-0 p-8">The best AI Lawyer software <br /> on the planet</h2>
  <div className="absolute bottom-44 right-80 pl-96 flex items-end">
  <button className="bg-gray-100  text-gray-900 px-6 py-3 rounded-full shadow-lg mr-4">Try Now</button>

  <button className="bg-transparent text-white px-6 py-3 rounded-full shadow-lg">Create Account</button>
</div>
<br />
<br />
<br />
<br />
</div>
    </div>
  )
}

export default AI
