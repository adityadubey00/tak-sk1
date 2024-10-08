import React from 'react';

const ResponseSubmitted = ({setStep}) => {
  const goBack = () => {
    setStep(0);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-green-500 mb-4">Thank You!</h1>
        <p className="text-lg text-gray-600 mb-6">Your response has been successfully submitted.</p>
        <button
          onClick={goBack}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ResponseSubmitted;
