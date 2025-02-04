export const TaskList = ({ tasks }) => {
    if (tasks.length === 0) {
        return <p className="text-center text-gray-500">No tasks yet. Add some!</p>
    }

    return (
        <div className="space-y-3">
            {tasks.map(task => (
                <div
                    key={task.id}
                    className="flex items-center p-3 border rounded bg-white"
                >
                    <span>{task.text}</span>
                </div>
            ))}
        </div>
    )
}