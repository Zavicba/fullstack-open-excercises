import React, {useState} from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas'}
    ])

    const [newName, setNewName] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        const addNewName = {
            name: newName,
        }

        if (persons.some(person => person.name === newName)) {
            return alert(`${newName} is already added to phonebook`);
        }

        setPersons(persons.concat(addNewName))
    }

    const handleOnChange = (event) => {
        setNewName(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form>
                <div>
                    name: <input onChange={handleOnChange}/>
                </div>
                <div>
                    <button type="submit" onClick={handleSubmit}>add</button>
                </div>
            </form>

            <h2>Numbers</h2>

            {persons.map(person => <p key={person.name}>{person.name}</p>)}
            <div>debug: {newName}</div>
        </div>
    )
}

export default App