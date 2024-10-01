import React, { useState } from 'react';

const ProjectType = ({ nextStep,prevStep }) => {
  const [type, setType] = useState('Time & Materials');
  const [hourlyRate, setHourlyRate] = useState('');
  const [budgetAlert, setBudgetAlert] = useState(false);
  const [budgetThreshold, setBudgetThreshold] = useState(80);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      type,
      hourlyRate,
      budgetAlert,
      budgetThreshold,
    });
    // You can add navigation to the next step here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-bold mb-4 text-center">Project Type</h2>
        
        <div className="flex justify-around mb-4">
          <button 
            type="button" 
            className={`px-4 py-2 rounded-md ${type === 'Time & Materials' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setType('Time & Materials')}
          >
            Time & Materials
          </button>
          <button 
            type="button" 
            className={`px-4 py-2 rounded-md ${type === 'Fixed Fee' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setType('Fixed Fee')}
          >
            Fixed Fee
          </button>
          <button 
            type="button" 
            className={`px-4 py-2 rounded-md ${type === 'Non-Billable' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setType('Non-Billable')}
          >
            Non-Billable
          </button>
        </div>

        <label className="block text-gray-700">Project Hourly Rate</label>
        <input 
          type="number"
          value={hourlyRate}
          onChange={(e) => setHourlyRate(e.target.value)}
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md"
          placeholder="₹ 12,678.00"
          required
        />

        <label className="block text-gray-700">Budget Threshold</label>
        <div className="flex items-center mb-4">
          <input 
            type="checkbox"
            checked={budgetAlert}
            onChange={() => setBudgetAlert(!budgetAlert)}
            className="mr-2"
          />
          <span>Send email alerts if project exceeds</span>
          <input 
            type="number"
            value={budgetThreshold}
            onChange={(e) => setBudgetThreshold(e.target.value)}
            className="w-20 ml-2 px-2 py-1 border border-gray-300 rounded-md"
          /> %
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
            onClick={prevStep}
          >
            Back
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={nextStep}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectType;
