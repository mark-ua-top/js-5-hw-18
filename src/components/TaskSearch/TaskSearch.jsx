import { useContext, useRef } from 'react';
import { TaskContext } from '../../context/TaskContext';

const TaskSearch = () => {
    const { setSearch } = useContext(TaskContext);
    const searchRef = useRef();

    const changeHandler = () => {
        setSearch(searchRef.current.value);
    };

    return (
        <input
            ref={searchRef}
            onChange={changeHandler}
            className="search"
            placeholder="Search task..."
        />
    );
};

export default TaskSearch;
