import React from "react";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";

const PaginationComponent = ({ itemPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemPerPage); i++) {
    pageNumbers.push(i);
  }

  const nextPage = () => {
    if (currentPage === pageNumbers[pageNumbers.length - 1]) {
      paginate(1);
    } else {
      paginate(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage === 1) {
      paginate(pageNumbers[pageNumbers.length - 1]);
    } else {
      paginate(currentPage - 1);
    }
  };

  return (
    <div className="pagination-container" aria-label="Page navigation example">
      <div className="pagination-item" disabled={currentPage - 1 === 0 ? true : false}>
        <div
          className="pagination-link page-link-prev"
          onClick={(ev) => {
            ev.preventDefault();
            prevPage();
          }}
          href="#prev"
        >
          <BsFillArrowLeftCircleFill size={32} color="#673ab7" />
        </div>
      </div>
      {pageNumbers.map((item) => {
        return (
          <div className={`pagination-item ${currentPage === item ? "active" : ""}`} key={item}>
            <div
              className="pagination-link"
              tag="a"
              href="#pageitem"
              onClick={(ev) => {
                ev.preventDefault();
                paginate(item);
              }}
            >
              {item}
            </div>
          </div>
        );
      })}

      <div className="pagination-item" disabled={pageNumbers[pageNumbers.length - 1] === currentPage}>
        <div
          className="pagination-link page-link-next"
          onClick={(ev) => {
            ev.preventDefault();
            nextPage();
          }}
          href="#next"
        >
          <BsFillArrowRightCircleFill size={32} color="#673ab7" />
        </div>
      </div>
    </div>
  );
};
export default PaginationComponent;
