import React from 'react';

const Pagination = ({perPage, totalNotifications, paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalNotifications / perPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav className="d-flex justify-content-center">
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={(e) => paginate(e,number)} href="!#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;