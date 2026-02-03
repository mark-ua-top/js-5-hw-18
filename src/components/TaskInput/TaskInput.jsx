import { useContext, useRef } from 'react';
import { TaskContext } from '../../context/TaskContext';

const TaskInput = () => {
    const { addTask } = useContext(TaskContext);
    const inputRef = useRef();

    const submitHandler = e => {
        e.preventDefault();
        const value = inputRef.current.value.trim();
        if (!value) return;

        const success = addTask(value);
        if (!success) {
            alert('Task already exists');
            return;
        }

        inputRef.current.value = '';
        inputRef.current.focus();
    };

    return (
        <form className="task-form" onSubmit={submitHandler}>
            <input ref={inputRef} placeholder="New task..." />
            <button>Add</button>
        </form>
    );
};

export default TaskInput;
