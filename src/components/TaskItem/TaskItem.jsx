import { useContext, useState, useRef, useEffect } from 'react';
import { TaskContext } from '../../context/TaskContext';

const TaskItem = ({ task }) => {
    const { removeTask, toggleTask } = useContext(TaskContext);
    const [expanded, setExpanded] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const textRef = useRef(null);

    useEffect(() => {
        if (textRef.current) {
            setShowMore(textRef.current.scrollWidth > textRef.current.clientWidth);
        }
    }, [task.text]);

    if (!task) return null;

    return (
        <li className={`task-item ${task.completed ? 'done' : ''}`}>
            <div className="task-left">
                <button
                    className={`complete-btn ${task.completed ? 'checked' : ''}`}
                    onClick={() => toggleTask(task.id)}
                >
                    ✓
                </button>
                <span
                    ref={textRef}
                    className={expanded ? 'expanded' : ''}
                >
                    {task.text}
                </span>
            </div>
            <div className="task-actions">
                {showMore && (
                    <button
                        className="more-btn"
                        onClick={() => setExpanded(prev => !prev)}
                    >
                        {expanded ? 'Less' : 'More'}
                    </button>
                )}
                <button className="delete-btn" onClick={() => removeTask(task.id)}>
                    ✕
                </button>
            </div>
        </li>
    );
};

export default TaskItem;
