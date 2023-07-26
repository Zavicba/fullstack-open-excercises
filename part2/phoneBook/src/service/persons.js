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

export default {
    getPersons,
    createPerson,
    deletePerson
}