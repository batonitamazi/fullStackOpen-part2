import React from "react";

function SingleCountry({ country }) {
  return (
    <div>
      <h1>{country?.name?.common}</h1>
      <p>capital {country?.capital[0]}</p>
      <p>area {country?.area}</p>
      <ul>
        {/* {Object.keys(country?.languages).forEach((key, index) => {
          console.log(country.languages[key])
          return (<li>damn</li>);
        })} */}
        {Object.keys(country.languages).map((key, index) => {
          return(
            <li key={index}>{country.languages[key]}</li>
          )
        })}
      </ul>
      <img src={country.flags.png} alt="flag"></img>
    </div>
  );
}

export default SingleCountry;
