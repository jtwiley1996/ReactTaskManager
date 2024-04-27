import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const TaskList = ({ tasks, onDelete }) => {
  return (
    <div>
      <h2>Task List</h2>
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <div>
                <h3>{task.name}</h3>
                <p>{task.description}</p>
                <button className='text-white'onClick={() => onDelete(task.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
