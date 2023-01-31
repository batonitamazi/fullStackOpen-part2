import React from "react";

function Filter({value, handleChange}) {
  return (
    <div>
      find countries
      <input value={value} onChange={handleChange} />
    </div>
  );
}

export default Filter;
