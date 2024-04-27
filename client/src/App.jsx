import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [currentTasks, setCurrentTasks] = useState([]);

  const handleDelete = (id) => {
    const newTaskList = currentTasks.filter(task => task.id !== id);
    setCurrentTasks(newTaskList);
  };

  const handleAddTask = (newTask) => {
    const newTaskWithId = { ...newTask, id: currentTasks.length + 1 };
    setCurrentTasks([...currentTasks, newTaskWithId]);
  };

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center text-white"> {/* Added Bootstrap classes for centering */}
      <div className="container">
        <header className="text-center mb-5">
          <h1>Task Manager</h1>
        </header>
        <main className='row align-items-center justify-content-center border border-white p-3 rounded taskcontainer'>
          <div className="col task-container-item">
            <TaskList tasks={currentTasks} onDelete={handleDelete} />
          </div>
          <div className="col task-container-item">
            <TaskForm onSubmit={handleAddTask} />
          </div>
        </main>
        <footer className="text-center mt-5">
          <p>© 2024 Task Manager</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
