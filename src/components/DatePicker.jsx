import React from 'react';

export default function DatePicker({ id, label, value, onChange }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="date"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
