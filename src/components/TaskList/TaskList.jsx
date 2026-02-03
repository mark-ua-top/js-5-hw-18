import { useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';
import TaskItem from '../TaskItem/TaskItem';

const TaskList = () => {
    const { tasks } = useContext(TaskContext);

    if (!tasks || tasks.length === 0) return <p>No tasks</p>;

    return (
        <ul className="task-list-wrapper">
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} />
            ))}
        </ul>
    );
};

export default TaskList;
