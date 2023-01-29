import React from "react";

function Persons({newPersons, handleDelete}) {
  return (
    <>
      {newPersons.map((person) => (
        <div key={person.id}>
          {person.name} {person.number}
        <button onClick={() =>handleDelete(person.id)}>delete</button>
        </div>
      ))}
    </>
  );
}

export default Persons;
