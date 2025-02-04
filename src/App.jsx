import {TaskForm} from './components/TaskForm'
import {TaskList} from './components/TaskList'

import { useState, useEffect } from 'react'

function App() {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const savedTasks = localStorage.getItem('tasks')
        if (savedTasks) {
            setTasks(JSON.parse(savedTasks))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const addTask = (newTask) => {
        setTasks([...tasks, newTask])
    }

    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
                <h1 className="text-2xl font-bold text-center mb-6">Personal Task Tracker</h1>
                <TaskForm onAddTask={addTask} />
                <TaskList tasks={tasks} />
            </div>
        </div>
    )
}

export default App