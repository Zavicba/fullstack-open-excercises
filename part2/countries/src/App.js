import React, {useState, useEffect} from 'react'

import axios from 'axios'

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

const App = () => {
    const [countries, setCountries] = useState([])
    const [filteredCountries, setFilteredCountries] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [showCountry, setShowCountry] = useState(false)
    const [country, setCountry] =useState([])

    useEffect(() => {
        axios
            .get('https://restcountries.com/v3.1/all')
            .then(response => {
                setCountries(response.data)
            })
        console.log("ejecute useEffect")

    }, [])

    useEffect(() => {
        if (inputValue === "") {
            setFilteredCountries([])
            return
        }

        let filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(inputValue.toLowerCase()))
        setFilteredCountries(filteredCountries)
    },[inputValue])

    const handleOnChange = (event) => {
      setInputValue(event.target.value)
      setShowCountry(false)
    }

    const handleShowButton = (country) => {
        setShowCountry(true)
        setCountry(country)
    }

    return (
        <div>
            <p>find countries <input type="text" onChange={handleOnChange}/></p>
            <CountryList countries={filteredCountries} handleShowButton={handleShowButton}/>
            {showCountry && <Country country={country}/>}
        </div>
    )
}

export default App