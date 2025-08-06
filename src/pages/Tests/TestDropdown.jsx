import React, { useState, useEffect } from "react";
import { Dropdown } from 'react-drpdwn-ui';
import states from "../../data/states";

//this test allow /tests url for test responses with React plugin react-drpdwn-ui in dev envirronnement localhost:5173

export default function TestDropdown() {
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log("Dropdown mounted");
  }, []);

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log("Dropdown changed:", e.target.value);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Test Dropdown (console.log only)</h2>
      <Dropdown
        id="state"
        label="State"
        value={value}
        options={states.map(s => ({ label: s.name, value: s.abbreviation }))}
        onChange={handleChange}
      />
      <p>Selected value: {value || "none"}</p>
    </div>
  );
}