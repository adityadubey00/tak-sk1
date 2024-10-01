import React, { useState } from 'react';

const ManagePermissions = ({ nextStep, prevStep }) => {
  const [selectedPermission, setSelectedPermission] = useState('Only Admins');

  const handleSelectPermission = (permission) => {
    setSelectedPermission(permission);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-bold mb-4 text-center">Who can manage projects</h2>
        <p className="text-sm text-gray-500 text-center mb-6">Don’t panic — You can also customize this permission in settings</p>

        <div className="mb-6">
          <div
            onClick={() => handleSelectPermission('Everyone')}
            className={`p-4 mb-2 border rounded-lg cursor-pointer ${
              selectedPermission === 'Everyone' ? 'border-blue-500' : 'border-gray-300'
            }`}
          >
            <span>Everyone</span>
            <p className="text-sm text-gray-500">All users can now see it, but guests cannot access the projects.</p>
          </div>

          <div
            onClick={() => handleSelectPermission('Only Admins')}
            className={`p-4 mb-2 border rounded-lg cursor-pointer ${
              selectedPermission === 'Only Admins' ? 'border-blue-500' : 'border-gray-300'
            }`}
          >
            <span>Only Admins</span>
            <p className="text-sm text-gray-500">Only admins can manage everything.</p>
          </div>

          <div
            onClick={() => handleSelectPermission('Specific People')}
            className={`p-4 mb-2 border rounded-lg cursor-pointer ${
              selectedPermission === 'Specific People' ? 'border-blue-500' : 'border-gray-300'
            }`}
          >
            <span>Specific People</span>
            <p className="text-sm text-gray-500">Only specific people can see it.</p>
          </div>
        </div>

        <div className="flex justify-between">
          <button className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={prevStep}>
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

export default ManagePermissions;
