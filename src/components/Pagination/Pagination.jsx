import React from 'react';
import './Pagination.css';

const Pagination = ({ totalUsers, userPerPage, setCurrentPage, currentPage }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalUsers / userPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="pagination-container">
      <div className="pagination">
        {pages.map((page, index) => (
          <div
            key={index}
            className={`pagination-number ${currentPage === page ? 'active' : ''}`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
