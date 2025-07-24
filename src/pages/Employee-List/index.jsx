import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { employeeColumns } from "../../data/columns";
import DataTable from "../../components/DataTable";



export default function EmployeeList() {
  const employees = useSelector((state) => state.employee.list);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const filteredData = useMemo(
    () =>
      employees.filter((emp) =>
        Object.values(emp)
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase()),
      ),
    [search, employees],
  );

  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <div className="data__table--container">
        <DataTable
          className="employee__table"
          columns={employeeColumns}
          data={filteredData}
          search={search}
          setSearch={setSearch}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <Link to="/">Home</Link>
    </div>
  );
}
