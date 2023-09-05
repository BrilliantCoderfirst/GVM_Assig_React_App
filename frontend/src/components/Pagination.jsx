import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPaginationButtons = () => {
    const buttons = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(
          <button
            key={i}
            onClick={() => onPageChange(i)}
            className={i === currentPage ? "active" : ""}
          >
            {i}
          </button>
        );
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 5; i++) {
          buttons.push(
            <button
              key={i}
              onClick={() => onPageChange(i)}
              className={i === currentPage ? "active" : ""}
            >
              {i}
            </button>
          );
        }
        buttons.push(<span key="dot">...</span>);
      } else if (currentPage > totalPages - 3) {
        for (let i = totalPages - 4; i <= totalPages; i++) {
          buttons.push(
            <button
              key={i}
              onClick={() => onPageChange(i)}
              className={i === currentPage ? "active" : ""}
            >
              {i}
            </button>
          );
        }
      } else {
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          buttons.push(
            <button
              key={i}
              onClick={() => onPageChange(i)}
              className={i === currentPage ? "active" : ""}
            >
              {i}
            </button>
          );
        }
        buttons.push(<span key="dot">...</span>);
      }
    }

    return buttons;
  };

  return (
    <div className="pagination">
      <p>First</p>
      {renderPaginationButtons()}
      <p>Last</p>
    </div>
  );
};

export default Pagination;
