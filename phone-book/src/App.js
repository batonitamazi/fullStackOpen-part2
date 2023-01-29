import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

function App() {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [number, setNumber] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [newPersons, setNewPersons] = useState(persons);

  const handleChangeName = (event) => {
    setNewName(event.target.value);
  };
  const handleChangeNumber = (event) => {
    setNumber(event.target.value);
  };

  const handlePushName = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: number,
    };
    const findIfExist = persons.find(({ name }) => name === personObject.name);
    if (findIfExist) {
      alert(`${personObject.name} is already added to phonebook`);
      setNewName("");
      setNumber("");
      return;
    }
    setPersons(persons.concat(personObject));
    setNewName("");
    setNumber("");
  };
  const handleFilter = (e) => {
    setFilterValue(e.target.value);
    if (filterValue.length >= 1) {
      setNewPersons(
        persons.filter((person) =>
          person.name.toLowerCase().includes(`${filterValue.toLowerCase()}`)
        )
      );
    }
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filterValue} handleFilter={handleFilter} />
      <h2>Add a new</h2>
      <PersonForm
        handleChangeName={handleChangeName}
        handleChangeNumber={handleChangeNumber}
        handlePushName={handlePushName}
        newName={newName}
        number={number}
      />
      <h2>Numbers</h2>
      <Persons newPersons={newPersons}/>
    </div>
  );
}

export default App;
