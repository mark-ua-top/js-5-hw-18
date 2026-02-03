import { createContext, useState, useEffect } from 'react';

export const TaskContext = createContext();

const TASKS_PER_PAGE = 5;

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem('tasks');
        return saved ? JSON.parse(saved) : [];
    });
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = text => {
        const exists = tasks.some(
            task => task.text.toLowerCase() === text.toLowerCase()
        );
        if (exists) return false;

        setTasks(prev => [
            ...prev,
            { id: Date.now(), text, completed: false }
        ]);
        return true;
    };

    const removeTask = id =>
        setTasks(prev => prev.filter(task => task.id !== id));

    const toggleTask = id =>
        setTasks(prev =>
            prev.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );

    const filtered = tasks.filter(task =>
        task.text.toLowerCase().includes(search.toLowerCase())
    );

    const start = (page - 1) * TASKS_PER_PAGE;
    const paginatedTasks = filtered.slice(start, start + TASKS_PER_PAGE);
    const totalPages = Math.ceil(filtered.length / TASKS_PER_PAGE);

    return (
        <TaskContext.Provider
            value={{
                tasks: paginatedTasks,
                addTask,
                removeTask,
                toggleTask,
                setSearch,
                page,
                setPage,
                totalPages,
                total: tasks.length
            }}
        >
            {children}
        </TaskContext.Provider>
    );
};
