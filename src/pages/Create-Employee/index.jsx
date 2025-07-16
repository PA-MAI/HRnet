import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../../Redux/employeeSlice';
import states from '../../data/states'; 
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import '../../styles/css/App.css'

export default function CreateEmployee()  {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: 'Sales',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEmployee(formData));
    alert('Employee created!');
    navigate('/employee-list');
  };

  return (
    <>
    <div className="title">
            <h1>HRnet</h1>
        </div>
      <div className="container">
      <Link to="/Employee-List">View Current Employees</Link>
      
      <h2>Create Employee</h2>

      <form onSubmit={handleSubmit} className="form__create">
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" value={formData.firstName} onChange={handleChange} />

        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" value={formData.lastName} onChange={handleChange} />

        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input id="dateOfBirth" type="date" value={formData.dateOfBirth} onChange={handleChange} />

        <label htmlFor="startDate">Start Date</label>
        <input id="startDate" type="date" value={formData.startDate} onChange={handleChange} />

        <fieldset className="address">
          <legend>Address</legend>
          <div>
            <label htmlFor="street">Street</label>
            <input id="street" value={formData.street} onChange={handleChange} />

            <label htmlFor="city">City</label>
            <input id="city" value={formData.city} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="state">State</label>
            <select id="state" value={formData.state} onChange={handleChange}>
              {states.map((s) => (
                <option key={s.abbreviation} value={s.abbreviation}>
                  {s.name}
                </option>
              ))}
            </select>

            <label htmlFor="zipCode">Zip Code</label>
              <input id="zipCode" type="number" value={formData.zipCode} onChange={handleChange} />
          </div>
        </fieldset>

        <label htmlFor="department">Department</label>
        <select id="department" value={formData.department} onChange={handleChange}>
          <option>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
        </select>

        <button className="submit" type="submit">Save</button>
      </form>
      </div>
      </>
  );
}


