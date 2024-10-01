import React, { useState } from 'react';

const SelectView = ({ nextStep,prevStep }) => {
  const [selectedView, setSelectedView] = useState('Board');

  const handleSelectView = (view) => {
    setSelectedView(view);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-bold mb-4 text-center">Select a view</h2>
        <p className="text-sm text-gray-500 text-center mb-6">You can also customize this view in settings</p>

        <div className="flex justify-between mb-6">
          <div
            onClick={() => handleSelectView('List')}
            className={`w-1/2 p-4 mx-2 border rounded-lg cursor-pointer text-center ${
              selectedView === 'List' ? 'border-blue-500' : 'border-gray-300'
            }`}
          >
            <span>List</span>
          </div>
          <div
            onClick={() => handleSelectView('Board')}
            className={`w-1/2 p-4 mx-2 border rounded-lg cursor-pointer text-center ${
              selectedView === 'Board' ? 'border-blue-500' : 'border-gray-300'
            }`}
          >
            <span>Board</span>
          </div>
        </div>

        <div className="flex justify-between">
          <button onClick={prevStep} className="bg-gray-500 text-white px-4 py-2 rounded-md">
            Back
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={nextStep}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectView;
