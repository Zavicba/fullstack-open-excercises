import React, {useState} from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', number: '1234567'}
    ])

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

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

    return (
        <div>
            <h2>Phonebook</h2>

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