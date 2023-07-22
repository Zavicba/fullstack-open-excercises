import React, {useState, useEffect} from 'react'

import axios from 'axios'

import Weather from "./components/Weather";
import Country from "./components/Country";
import CountryList from "./components/CountryList";

const api_key = process.env.REACT_APP_API_KEY

const App = () => {
    const [countries, setCountries] = useState([])
    const [filteredCountries, setFilteredCountries] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [showCountry, setShowCountry] = useState(false)
    const [country, setCountry] = useState([])
    const [weather, setWeather] = useState({})

    useEffect(() => {
        axios
            .get('https://restcountries.com/v3.1/all')
            .then(response => {
                setCountries(response.data)
            })
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
        setCountry(country)
        getWeather(country.name.common)
        setShowCountry(true)
    }

    const getWeather = (country) => {
        axios
            .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${country}`)
            .then(response => {
                setWeather(response.data)
            })
    }

    return (
        <div>
            <p>find countries <input type="text" onChange={handleOnChange}/></p>
            <CountryList countries={filteredCountries} handleShowButton={handleShowButton}/>
            {showCountry && <Country country={country}/>}
            {showCountry && <Weather country={country} weather={weather}/>}
        </div>
    )
}

export default App