import React, { useState } from 'react';

const AddTeam = ({ prevStep }) => {
  const [teamMembers, setTeamMembers] = useState([
    'Emma Castro',
    'Steve Mathew',
    'Robert Pattinson',
    'Fanny Russell',
    'Rodney Meyer',
    'Ellen Simmons',
    'Virgie Kim',
  ]);

  const [selectedMembers, setSelectedMembers] = useState([]);
  const [newMember, setNewMember] = useState('');

  const handleAddMember = () => {
    if (newMember.trim() && !teamMembers.includes(newMember)) {
      setTeamMembers([...teamMembers, newMember]);
      setNewMember('');
    }
  };

  const handleMemberToggle = (member) => {
    setSelectedMembers(
      selectedMembers.includes(member)
        ? selectedMembers.filter((m) => m !== member)
        : [...selectedMembers, member]
    );
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-bold mb-4 text-center">Invite or Add a person</h2>

        <div className="flex mb-4">
          <input
            type="text"
            className="border p-2 rounded-lg w-full"
            placeholder="Add a person"
            value={newMember}
            onChange={(e) => setNewMember(e.target.value)}
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2" onClick={handleAddMember}>
            Add
          </button>
        </div>

        <div className="mb-6 max-h-60 overflow-y-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="checkbox"
                className="mr-2"
                checked={selectedMembers.includes(member)}
                onChange={() => handleMemberToggle(member)}
              />
              <span>{member}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-between">
          <button className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={prevStep}>
            Back
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Create Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTeam;
