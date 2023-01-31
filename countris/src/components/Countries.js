import React from "react";
import SingleCountry from './SingleCountry'

function Countries({ countries }) {
  if (countries.length > 10) {
    return <div>too many matches, specify another filter</div>;
  } else if(countries.length <= 10 && countries.length > 1) {
    return (
      <ul>
        {countries.map((country, index) => (
          <p key={index}> {country?.name?.common}</p>
        ))}
      </ul>
    );
  }
  else if (countries.length === 1){
    return(
      <SingleCountry country={countries[0]}/>
    )
  }
}

export default Countries;
