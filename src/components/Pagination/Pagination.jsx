import { useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';

const Pagination = () => {
    const { page, setPage, totalPages } = useContext(TaskContext);

    if (totalPages <= 1) return null;

    const pages = [];
    for (let i = 1; i <= totalPages; i++) pages.push(i);

    return (
        <div className="pagination">
            <button
                className="nav-btn"
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
            >
                ‹
            </button>

            {pages.map(p => (
                <button
                    key={p}
                    className={`page-btn ${p === page ? 'active' : ''}`}
                    onClick={() => setPage(p)}
                >
                    {p}
                </button>
            ))}

            <button
                className="nav-btn"
                disabled={page === totalPages}
                onClick={() => setPage(page + 1)}
            >
                ›
            </button>
        </div>
    );
};

export default Pagination;
