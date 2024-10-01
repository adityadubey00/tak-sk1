import React, { useState } from 'react';

const CreateProject = ({ nextStep }) => {
  const [project, setProject] = useState({
    projectName: '',
    client: '',
    startDate: '',
    endDate: '',
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Project details: ', project);
    nextStep();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-bold mb-4 text-center">Create a Project</h2>
        
        <label className="block text-gray-700">Project Name</label>
        <input 
          type="text"
          name="projectName"
          value={project.projectName}
          onChange={handleChange}
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md"
          placeholder="Enter project name here"
          required
        />

        <label className="block text-gray-700">Client</label>
        <select 
          name="client"
          value={project.client}
          onChange={handleChange}
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md"
          required
        >
          <option value="">Select a client</option>
          <option value="Client 1">Client 1</option>
          <option value="Client 2">Client 2</option>
        </select>

        <label className="block text-gray-700">Dates</label>
        <div className="flex space-x-2 mb-4">
          <input 
            type="date"
            name="startDate"
            value={project.startDate}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
          <input 
            type="date"
            name="endDate"
            value={project.endDate}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <label className="block text-gray-700">Notes (Optional)</label>
        <textarea 
          name="notes"
          value={project.notes}
          onChange={handleChange}
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md"
          placeholder="Enter notes here"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default CreateProject;
