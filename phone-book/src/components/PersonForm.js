import React from "react";

function PersonForm({handleChangeName, handlePushPerson, newName, handleChangeNumber, number}) {
  return (
    <form onSubmit={handlePushPerson}>
      <div>
        name: <input onChange={handleChangeName} value={newName} />
      </div>
      <div>
        number: <input value={number} onChange={handleChangeNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}

export default PersonForm;
