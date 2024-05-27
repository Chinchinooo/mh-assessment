import React, { useContext } from 'react';
import './Pagination.css';
import { AppContext } from '../../AppContext';

const Pagination = ({itemsPerPage, data}) => {
  const { setCurrentPage, currentPage } = useContext(AppContext);
  
    if (!data) {
    return <div>Loading...</div>; 
  }

  let totalItems = data.length
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
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
