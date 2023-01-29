import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";
import PersonService from "./services/persons";

function App() {
  const [persons, setPersons] = useState([]);
  const [newPersons, setNewPersons] = useState(persons);
  const [newName, setNewName] = useState("");
  const [number, setNumber] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const handleChangeName = (event) => {
    event.preventDefault();
    setNewName(event.target.value);
  };
  const handleChangeNumber = (event) => {
    event.preventDefault();
    setNumber(event.target.value);
  };

  const handlePushPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: number,
    };
    const findIfExist = persons.find(
      (person) => person?.name === personObject.name
    );
    if (findIfExist) {
      if (
        window.confirm(
          `${personObject.name} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        PersonService.update(findIfExist.id, personObject);
        setNewName("");
        setNumber("");
        setMessage(`updated ${personObject.name}s phone number`);
        setTimeout(() => {
          setMessage("");
        }, 5000);
        return;
      }
      return;
    }
    PersonService.create(personObject).then((response) => {
      setNewPersons(newPersons.concat(response));
      setMessage(`added ${personObject.name}`);
      setTimeout(() => {
        setMessage("");
      }, 5000);
    });
    setNewName("");
    setNumber("");
  };

  const handleFilter = (e) => {
    e.preventDefault();
    setFilterValue(e.target.value);
    setNewPersons(
      persons.filter((person) =>
        person.name.toLowerCase().includes(`${filterValue.toLowerCase()}`)
      )
    );
  };
  useEffect(() => {
    PersonService.getAllPerson().then((response) => {
      setPersons(response);
      setNewPersons(response);
    });
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("do you really want to delete this person?")) {
      PersonService.delete(id).catch(error => {
        setMessage(
          `person '${newPersons.find((person) => person.id === id).name}' was already removed from server`
        )
        setError(true)
        setTimeout(() => {
          setMessage('')
          setError(false)
        }, 5000)
      })
      setNewPersons(newPersons.filter((person) => person.id !== id));
    }
    return;
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification error={error} message={message} />
      <Filter value={filterValue} handleFilter={handleFilter} />
      <h2>Add a new</h2>
      <PersonForm
        handleChangeName={handleChangeName}
        handleChangeNumber={handleChangeNumber}
        handlePushPerson={handlePushPerson}
        newName={newName}
        number={number}
      />
      <h2>Numbers</h2>
      <Persons newPersons={newPersons} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
