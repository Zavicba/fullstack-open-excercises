import React from 'react'
import ReactDOM from 'react-dom'

const Course = ({course}) => {
    const {name, parts} = course

    return (
        <>
            <Header name={name}/>
            <Content parts={parts}/>
        </>
    )
}

const Header = ({name}) => {
    return <h1>{name}</h1>
}

const Content = ({parts}) => {
    let totalExercise = parts.reduce((total, part) => total + part.exercises, 0)

    return (
        <>
            {
                parts.map(part => { return <Part key={part.id} name={part.name} exercises={part.exercises}/>})
            }
            <p><strong>total of {totalExercise} exercises</strong></p>
        </>
    )
}

const Part = ({name, exercises}) => {
    return <p>{name} {exercises}</p>
}

const App = () => {
    const course = {
        id: 1,
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1,
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2,
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3,
            },
        ],
    }

    return <Course course={course} />
}

export default App

ReactDOM.render(<App />, document.getElementById('root'))
