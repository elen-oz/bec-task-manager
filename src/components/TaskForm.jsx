import { useState } from 'react'

export const TaskForm = ({ onAddTask }) => {
    const [taskInput, setTaskInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!taskInput.trim()) return

        onAddTask({
            id: Date.now(),
            text: taskInput,
            completed: false
        })
        setTaskInput('')
    }

    return (
        <form onSubmit={handleSubmit} className="mb-6">
            <div className="flex gap-2">
                <input
                    type="text"
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                    placeholder="Add a new task..."
                    className="flex-1 p-2 border rounded"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Add
                </button>
            </div>
        </form>
    )
}