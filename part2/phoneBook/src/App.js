import React, {useState, useEffect} from 'react'
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import personService from './service/persons'

const App = () => {
    const [data, setData] = useState([])
    const [persons, setPersons] = useState(data)

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filterInput, setFilterInput] = useState('')

    useEffect(() => {
        personService
            .getPersons()
            .then(response => {
                setPersons(response.data)
                setData(response.data)
            })
    }, [])

    // I added this useEffect because I didn't like how the list behaved, it wasn't really dynamic. sorry if I ahead of a lesson
    useEffect(() => {
        if (filterInput.length < 1) {
            setPersons(data)
            return
        }

        let filteredPersonsByName = persons.filter(person => person.name.toLowerCase().includes(filterInput.toLowerCase()))
        setPersons(filteredPersonsByName)
    }, [filterInput])

    const handleSubmit = (event) => {
        event.preventDefault()
        const newPerson = {
            name: newName,
            number: newNumber
        }

        if (persons.some(person => person.name === newName)) {
            return alert(`${newName} is already added to phonebook`);
        }

        personService
            .createPerson(newName, newNumber)
            .then(() => console.log("name added successfully"))
            .catch(()=> console.log("could not add name"))

        setPersons(persons.concat(newPerson))
    }

    const handleOnChangeName = (event) => {
        setNewName(event.target.value)
    }

    const handleOnChangeNumber = (event) => {
        setNewNumber(event.target.value)
    }

    const handleOnChangeFilter = (event) => {
        setFilterInput(event.target.value)
    }

    const handleDelete = async (id, name) => {
        const deleteUser = window.confirm(`Delete ${name}?`);

        if (deleteUser) {
            try {
                await personService.deletePerson(id);
                console.log("Name deleted successfully");
                setPersons(persons.filter(person => person.id !== id))
            } catch (error) {
                console.log("Could not delete name");
            }
        }
    };

    return (
        <div>
            <h2>Phonebook</h2>

            <Filter handleOnChangeFilter={handleOnChangeFilter}/>

            <h2>Add a new</h2>

            <PersonForm handleOnChangeName={handleOnChangeName} handleOnChangeNumber={handleOnChangeNumber} handleSubmit={handleSubmit}/>

            <h2>Numbers</h2>

            <Persons persons={persons} handleDelete={handleDelete}/>
        </div>
    )
}

export default App