
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TaskList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/tasks')
            .then(response => setTasks(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>

            <ul>
                <h2>Tasks</h2>

                {tasks.map(task => (
                    <li key={task.id}>
                        <strong>{task.title}</strong>: {task.description}

                    </li>

                ))}
            </ul>
        </div>
    );
}
export default TaskList;
