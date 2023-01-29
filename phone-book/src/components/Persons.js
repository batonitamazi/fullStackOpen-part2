import React from "react";

function Persons({newPersons}) {
  return (
    <>
      {newPersons.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ))}
    </>
  );
}

export default Persons;
