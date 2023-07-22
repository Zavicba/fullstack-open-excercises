import React from "react";
import Country from "./Country";

const CountryList = ({countries, handleShowButton}) => {
    if (countries.length === 1) {
        return (
            <Country country={countries[0]}/>
        )
    }

    return countries.length <= 10
        ? countries.map(country => <p key={country.name.common}>{country.name.common} <button onClick={() => handleShowButton(country)}>show</button></p>)
        : <p>Too many matches, specify another filter</p>
}

export default CountryList
