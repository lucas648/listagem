import React, { useState, useEffect } from 'react';
import Task from './components/task/task'
import './App.css';

function App() {
  const [task, setTask] = useState([]);

  async function handleSaveTask(data) {
    const response = await localStorage.setItem(response.data)

    setTask([...task, response.data])
  }

  return (
      <div className="app-content">
          <aside>
              < Task onSubmit={handleSaveTask} /> 
          </aside>
      </div>
  )
}

export default App;
