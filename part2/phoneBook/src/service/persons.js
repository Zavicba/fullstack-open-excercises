import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getPersons = () => {
    return axios.get(baseUrl)
}

const createPerson = (name, number) => {
    return axios.post(baseUrl, {name, number})
}

const deletePerson = id => {
    return axios.delete(`${baseUrl}/${id}`)
}

const updatePerson = (id, person) => {
    console.log("id", id)
    console.log("person", person)
    return axios.put(`${baseUrl}/${id}`, {
        name: person.name,
        number: person.number,
        id: id,
    })
}

export default {
    getPersons,
    createPerson,
    deletePerson,
    updatePerson
}