import React, {useState, useEffect} from 'react'
import Filter from './components/Filter'
import Countries from './components/Countries'
import CountriesService from './services/countries';

function App() {
  const [filterValue, setFilterValue] = useState("");
  const [countries, setCountries] = useState([])
  const [newCountries, setNewCountries] = useState([])
  const handleFilterChange = (event) => {
    event.preventDefault();
    setFilterValue(event.target.value)
    if(filterValue){
      setNewCountries(
        countries.filter((country) =>
          country.name.common.toLowerCase().includes(`${filterValue.toLowerCase()}`)
        )
      );
    }
  }
  useEffect(() => {
    CountriesService.get().then(response => setCountries(response))
  }, [])
  console.log(newCountries)
  return (
    <div>
      <Filter value={filterValue} handleChange={handleFilterChange}/>
      <Countries countries={newCountries}/>
    </div>
  );
}

export default App;
