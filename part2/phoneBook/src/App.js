import React, {useState, useEffect} from 'react'

const App = () => {
    const personsData = [
        {name: 'Arto Hellas', number: '040-123456'},
        {name: 'Ada Lovelace', number: '39-44-5323523'},
        {name: 'Dan Abramov', number: '12-43-234345'},
        {name: 'Mary Poppendieck', number: '39-23-6423122'}
    ]

    const [persons, setPersons] = useState(personsData)

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filteredPersons, setFilteredPersons] = useState('')

    // I added this useEffect because I didn't like how the list behaved, it wasn't really dynamic. sorry if I ahead of a lesson
    useEffect(() => {
        if (filteredPersons.length < 1) {
            setPersons(personsData)
            return
        }

        let filteredPersonsByName = persons.filter(person => person.name.toLowerCase().includes(filteredPersons.toLowerCase()))
        setPersons(filteredPersonsByName)
    }, [filteredPersons])

    const handleSubmit = (event) => {
        event.preventDefault()
        const newPerson = {
            name: newName,
            number: newNumber
        }

        if (persons.some(person => person.name === newName)) {
            return alert(`${newName} is already added to phonebook`);
        }

        setPersons(persons.concat(newPerson))
    }

    const handleOnChangeName = (event) => {
        setNewName(event.target.value)
    }

    const handleOnChangeNumber = (event) => {
        setNewNumber(event.target.value)
    }

    const handleOnChangeFilter = (event) => {
        setFilteredPersons(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <div>
                <input onChange={handleOnChangeFilter}/>
            </div>

            <h2>Add a new</h2>
            <form>
                <div>
                    name: <input onChange={handleOnChangeName}/>
                </div>
                <div>
                    number: <input onChange={handleOnChangeNumber}/>
                </div>
                <div>
                    <button type="submit" onClick={handleSubmit}>add</button>
                </div>
            </form>

            <h2>Numbers</h2>

            {persons.map(person => <p key={person.name}>{person.name} {person.number}</p>)}
        </div>
    )
}

export default App