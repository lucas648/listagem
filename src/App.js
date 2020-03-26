import React, { useState } from 'react';
import Task from './components/task/task'
import './App.css';

function App() {
  const [task, setTask] = useState([]);

  useEffect(() => {
      async function loadTask() {
          const response = await localStorage.getItem(task)
      }
  })

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
