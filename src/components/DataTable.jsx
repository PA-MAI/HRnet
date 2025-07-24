import React from "react";
import DataTableLib from "react-data-table-component";

const customStyles = {
  table: {
    style: {
      display: "flex",
      border: "1px solid #ccc",
    },
  },
  rows: {
    style: {
      minHeight: "48px",
    },
  },
  headCells: {
    style: {
      whiteSpace: "normal !important",
      overflow: "visible",
      textOverflow: "unset",
      textAlign: "center",
      wordBreak: "break-word",
      lineHeight: "1.2em",
    },
  },
};

export default function DataTable({
  columns,
  data,
  search,
  setSearch,
  rowsPerPage,
  setRowsPerPage,
  currentPage,
  setCurrentPage,
}) {
  const totalRows = data.length;
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    const maxPage = Math.ceil(totalRows / rowsPerPage);
    setCurrentPage((prev) => Math.min(prev + 1, maxPage));
  };

  const start = totalRows === 0 ? 0 : indexOfFirstRow + 1;
  const end = Math.min(indexOfLastRow, totalRows);

  return (
    <div className="datatables__wrapper">
      <div className="employee__table">
        <div className="datatables__top">
          <div className="datatables__length">
            <label>
              Show{" "}
              <select
                className="employee__table--length"
                value={rowsPerPage}
                onChange={handleRowsPerPageChange}
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>{" "}
              entries
            </label>
          </div>
          <div className="datatables__filter">
            <label>
              Search:{" "}
              <input
                type="search"
                className="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </label>
          </div>
        </div>

        <DataTableLib
          columns={columns}
          data={currentRows}
          responsive
          highlightOnHover
          customStyles={customStyles}
          noHeader
        />

        <div className="datatables__bottom">
          <div className="datatables__info" role="status" aria-live="polite">
            Showing {start} to {end} of {totalRows} entries
          </div>
          <div className="pagination">
            <button
              className="pagination__button"
              onClick={handlePrevious}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span className="employee__table--page-number">
              Page {currentPage} of {Math.ceil(totalRows / rowsPerPage)}
            </span>
            <button
              className="pagination__button"
              onClick={handleNext}
              disabled={indexOfLastRow >= totalRows}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
