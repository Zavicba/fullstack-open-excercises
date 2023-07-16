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
    const courses = [
        {
            name: 'Half Stack application development',
            id: 1,
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
                {
                    name: 'Redux',
                    exercises: 11,
                    id: 4,
                },
            ],
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1,
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2,
                },
            ],
        },
    ]

    return courses.map(course => <Course course={course} key={course.id}/>)
}


export default App

ReactDOM.render(<App />, document.getElementById('root'))
