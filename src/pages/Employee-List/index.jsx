import React from 'react'
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

    return (
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            
                <DataTable
                    columns={columns}
                    data={employees}
                    pagination
                    responsive
                    highlightOnHover
                    customStyles={customStyles}
                />
            
            <Link to="/">Home</Link>
        </div>
    );
}
export default EmployeeList