import React from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Task Manager</h1>
      </header>
      <main>
        <TaskList />
        <TaskForm />
      </main>
      <footer>
        <p>© 2024 Task Manager</p>
      </footer>
    </div>
  );
}

export default App;
