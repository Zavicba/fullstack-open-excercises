import React from 'react'

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
    return (
        parts.map(part => {
            return <Part key={part.id} name={part.name} exercises={part.exercises}/>
        })
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