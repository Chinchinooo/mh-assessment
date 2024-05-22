import React from 'react';

const Pagination = ({ totalUsers, userPerPage, setCurrentPage }) => {
    let pages = [];
    for (let i = 1; i <= Math.ceil(totalUsers/userPerPage); i++) {
        pages.push(i)
    }  
  return (
    <div>
        {pages.map((page, index) => {
            return( 
            <button 
            key={index}
            onClick={() => setCurrentPage(page)}
                >{page}
            </button>
        )})}
    </div>
  );
};


export default Pagination;