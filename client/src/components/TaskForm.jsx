import React, { useState } from 'react';
import '../App.css';

const TaskForm = ({ onSubmit }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if taskName or taskDescription is empty
    if (!taskName.trim() || !taskDescription.trim()) {
      alert('Please enter a task name and description.');
      return;
    }
    // Call the onSubmit function passed from the parent component with the task details
    onSubmit({
      name: taskName,
      description: taskDescription,
    });
    // Clear the input fields after submitting the task
    setTaskName('');
    setTaskDescription('');
  };

  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="taskName">Task Name:</label>
          <input
          className='text-white'
            type="text"
            id="taskName"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="taskDescription">Task Description:</label>
          <textarea
          className='text-white'
            id="taskDescription"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          ></textarea>
        </div>
        <button className='text-white' type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
