import React from "react";

const Country = ({country}) => {
    let languages  = Object.values(country.languages)

    return (
        <>
            <h2>{country.name.common}</h2>
            <p>capital {country?.capital[0]}</p>
            <p>population {country.population}</p>

            <h3>languages</h3>
            <ul>
                {languages.map(language => <li key={language}>{language}</li>)}
            </ul>

            <img src={country.coatOfArms.png} style={{ width: '100px', height: '100px' }} alt="country icon"/>
        </>
    )
}

export default Country