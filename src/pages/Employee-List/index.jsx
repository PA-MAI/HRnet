import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import { useSelector } from 'react-redux';
import '../../styles/css/App.css'


const columns = [ 
    
    { name: 'First Name', selector: row => row.firstName, sortable: true },
    { name: 'Last Name', selector: row => row.lastName, sortable: true },
    { name: 'Start Date', selector: row => row.startDate, sortable: true},
    { name: 'Department', selector: row => row.department, sortable: true },
    { name: 'Date of Birth', selector: row => row.dateOfBirth, sortable: true },
    { name: 'Street', selector: row => row.street, sortable: true },
    { name: 'City', selector: row => row.city, sortable: true },
    { name: 'State', selector: row => row.state, sortable: true },
    { name: 'Zip Code', selector: row => row.zipCode, sortable: true },
];


const customStyles = {
    table: {
    style: {
        display:'flex',
        border: '1px solid #ccc',
      },
    },
    rows: {
      style: {
        
        minHeight: '48px',
      },
    },
    headCells: {
      style: {
        backgroundColor: '#f5f5f5',
        fontWeight: 'bold',
      },
    },
  };
  

function EmployeeList() {

  const employees = useSelector((state) => state.employee.list);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  
  //filtre des employés
  const filteredData = useMemo(() => {
        return employees.filter((employee) =>
            Object.values(employee)
                .join(' ')
                .toLowerCase()
                .includes(search.toLowerCase())
        );
  }, [search, employees]);

  const totalRows = filteredData.length;
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);
  const handleRowsPerPageChange = (e) => {
        setRowsPerPage(Number(e.target.value));
        setCurrentPage(1); // reset to first page
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
         <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <div className="datatables__wrapper">
                <div className="datatables__top">
                    <div className="datatables__length">
                        <label>
                            Show{' '}
                            <select
                                className="employee__table--length"
                                value={rowsPerPage}
                                onChange={handleRowsPerPageChange}
                            >
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select>{' '}
                            entries
                        </label>
                    </div>
                    <div className="datatables__filter">
                        <label>
                            Search:{' '}
                            <input
                                type="search"
                                className="search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </label>
                    </div>
                </div>

                <DataTable
                    columns={columns}
                    data={currentRows}
                    responsive
                    highlightOnHover
                    customStyles={customStyles}
                    noHeader
                />

                <div className="datatables__bottom">
                    <div
                        className="datatables__info"
                        role="status"
                        aria-live="polite"
                    >
                        Showing {start} to {end} of {totalRows} entries
                    </div>
                    <div className="pagination">
                        <button className="pagination__button"
                            onClick={handlePrevious}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        <button className="pagination__button"
                            onClick={handleNext}
                            disabled={indexOfLastRow >= totalRows}
                        >
                            Next
                        </button>
                    </div>
                </div>
                <Link to="/">Home</Link>
            </div>
        </div>
    );
}
export default EmployeeList

