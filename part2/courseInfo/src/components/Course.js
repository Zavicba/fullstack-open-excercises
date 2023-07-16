import React from "react";

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

export default Course
