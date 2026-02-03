import { useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';

const AppHeader = () => {
    const { total } = useContext(TaskContext);

    return (
        <header className="header">
            <h1>Todo task pro</h1>
            <span>{total} tasks</span>
        </header>
    );
};

export default AppHeader;