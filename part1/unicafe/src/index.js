import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({good, neutral, bad, all, average, positive, haveComments}) => {
    if (haveComments) {
        return (
            <>
                <StatisticLine text={'good'} value={good}/>
                <StatisticLine text={'neutral'} value={neutral}/>
                <StatisticLine text={'bad'} value={bad}/>
                <StatisticLine text={'all'} value={all}/>
                <StatisticLine text={'average'} value={average}/>
                <StatisticLine text={'positive'} value={positive}/>
            </>
        )
    } else {
        return <p>No feedback given</p>
    }
}

const Button = ({text, handler}) => {
    return <button onClick={handler}>{text}</button>
}

const StatisticLine = ({text, value}) => {
    return <p>{text} {value}</p>
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGood = () => setGood(good + 1)
    const handleNeutral = () => setNeutral(neutral + 1)
    const handleBad = () => setBad(bad + 1)

    const all = good + neutral + bad
    const average = (good - bad) / all || 0
    const positive = (good / all) * 100 || 0

    const haveComments = good || neutral || bad

    return (
        <div>
            <h1>give feedback</h1>
            <Button text={'good'} handler={handleGood}/>
            <Button text={'neutral'} handler={handleNeutral}/>
            <Button text={'bad'} handler={handleBad}/>

            <h2>statistics</h2>
            <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} haveComments={haveComments} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)