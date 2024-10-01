import React, { useState } from 'react';

const AddTasks = ({ nextStep, prevStep }) => {
  const [tasks, setTasks] = useState([
    'Marketing Website Design',
    'Branding Design',
    'UI/UX Fundamentals',
    'Wireframe and Prototyping',
    'Style Guide',
    'UX Research and Flows',
    'Layout design',
  ]);

  const [newTask, setNewTask] = useState('');
  const [selectedTasks, setSelectedTasks] = useState([]);

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleTaskToggle = (task) => {
    setSelectedTasks(
      selectedTasks.includes(task)
        ? selectedTasks.filter((t) => t !== task)
        : [...selectedTasks, task]
    );
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-bold mb-4 text-center">Add a task</h2>

        <div className="flex mb-4">
          <input
            type="text"
            className="border p-2 rounded-lg w-full"
            placeholder="Add task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2" onClick={handleAddTask}>
            Add
          </button>
        </div>

        <div className="mb-6 max-h-60 overflow-y-auto">
          {tasks.map((task, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="checkbox"
                className="mr-2"
                checked={selectedTasks.includes(task)}
                onChange={() => handleTaskToggle(task)}
              />
              <span>{task}</span>
            </div>
          ))}
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

export default AddTasks;
