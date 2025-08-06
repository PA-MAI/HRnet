import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../Redux/employeeSlice";
import { Link } from "react-router-dom";

// Import custom dropdown library
import { Dropdown } from 'react-drpdwn-ui';

//import data
import states from "../../data/states";
import departements from "../../data/departements";

// Import custom components
import DatePicker from "../../components/DatePicker";
import Modal from "../../components/Modal";

/**
 * Component for creating a new employee.
 * Renders a form to input employee details and dispatches data to Redux store.
 */
export default function CreateEmployee() {
  const dispatch = useDispatch();
  // Local state for form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "Sales",
  });
// Control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

 /**
   * Handles changes for input and dropdown fields.
   * @param {Object} e - Event object from input or dropdown change
   */
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    console.log("Dropdown changed:", e.target.value);
  };

  /**
   * Handles form submission.
   * Dispatches employee data to Redux store and opens confirmation modal.
   * @param {Object} e - Event object from form submission
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    dispatch(addEmployee(formData));
    setIsModalOpen(true);
  };


  const handleModalClose = () => {
    setIsModalOpen(false);
    console.log("Modal closed");
  };

 // Convert states and departments into format suitable for <Dropdown />
  const statesOptions = states.map((s) => ({ label: s.name, value: s.abbreviation }));
  const departmentOptions = departements.map((d) => ({ label: d, value: d }));

  return (
    <>
      <div className="title">
        <h1>HRnet</h1>
      </div>

      <div className="container">
        <Link to="/Employee-List">View Current Employees</Link>

        <h2>Create Employee</h2>

        <form onSubmit={handleSubmit} className="form__create">
          <div className="form__create--template">
            <fieldset className="identity">
              <legend>Identity</legend>

              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />

              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />

              <DatePicker
                id="dateOfBirth"
                label="Date of Birth"
                value={formData.dateOfBirth}
                onChange={handleChange}
              />

              <DatePicker
                id="startDate"
                label="Start Date"
                value={formData.startDate}
                onChange={handleChange}
              />
            </fieldset>
            <fieldset className="address">
              <legend>Address</legend>

              <label htmlFor="street">Street</label>
              <input
                id="street"
                value={formData.street}
                onChange={handleChange}
              />

              <label htmlFor="city">City</label>
              <input id="city" value={formData.city} onChange={handleChange} />

              <Dropdown
                id="state"
                label="State"
                value={formData.state}
                options={statesOptions}
                onChange={handleChange}
              />

              <label htmlFor="zipCode">Zip Code</label>
              <input
                id="zipCode"
                type="number"
                value={formData.zipCode}
                onChange={handleChange}
              />
              <Dropdown
                id="department"
                label="Department"
                value={formData.department}
                options={departmentOptions}
                onChange={handleChange}
              />
            </fieldset>
          </div>
          <div>
            <button className="submit" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <h2>Employee created!</h2>
        <p>Your employee has been successfully saved.</p>
        <button onClick={handleModalClose}>OK</button>
      </Modal>
    </>
  );
}
