import React from 'react';
import Task from './components/task/task'
import api from './services/api'
import './App.css';

function App() {
    const [task, setTask] = useState([]);

    useEffect(() => {
      async function loadUsers() {
        const response = await applicationCache.get('/task');

        setTask(response.data);
      }
    }))

    async function handleAddTask(data) {

      const response = await api.post('/task', data )

      setTask([...task, response.data]);
    }

    return (
        <div className="app-container">
            <aside>
                <Task onSubmit={handleAddTask} />
            </aside>
        </div>
    )
}

export default App;
