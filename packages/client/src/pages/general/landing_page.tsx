import React from "react";

function LandingPage() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800'> 
      <div className='text-center p-6'>
        <h1 className="text-4xl font-bold mb-4">Momentum</h1>
        <p className="text-lg mb-6">Trainiere hart, lebe smart.</p>
        <a
          href=""
          className="bg-blue-500 text-white py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Jetzt herunterladen
        </a>
        <img
          //src="/Users/schmidt/Documents/HDBW/4.Semester/fachlich_digitale_technologien/momentum/packages/client/src/pages/landingPage/momentum.jpg"
          src="/momentum_zwei.webp"
          className="w-full max-w-xs mt-6 rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}


export default LandingPage;
