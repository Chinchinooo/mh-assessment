import React, { useContext } from 'react';
import './Pagination.css';
import { AppContext } from '../../AppContext';

const Pagination = ({itemsPerPage, data}) => {
  const { setCurrentPage, currentPage } = useContext(AppContext);
  
    if (!data) {
    return <div>Loading...</div>; 
  }

  let totalItems = data.length;
  let totalPages = Math.ceil(totalItems / itemsPerPage);
  let pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const maxPagesToShow = 6;
  let startPage = Math.max(currentPage - 3, 1);
  let endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);
  if (endPage - startPage + 1 < maxPagesToShow && startPage > 1) {
    startPage = Math.max(endPage - maxPagesToShow + 1, 1);
  }

return (
    <div className="pagination-container">
      <div className="pagination">
        {startPage > 1 && (
          <div className="pagination-number" onClick={() => setCurrentPage(startPage - 1)}>
            &lt;
          </div>
        )}
        {pages.slice(startPage - 1, endPage).map((page, index) => (
          <div
            key={index}
            className={`pagination-number ${currentPage === page ? 'active' : ''}`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </div>
        ))}
        {endPage < totalPages && (
          <div className="pagination-number" onClick={() => setCurrentPage(endPage + 1)}>
            &gt;
          </div>
        )}
      </div>
    </div>
  );
};

export default Pagination;
