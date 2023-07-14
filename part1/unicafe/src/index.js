import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const TableRow = ({text, value}) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}

const Statistics = ({good, neutral, bad, all, average, positive, haveComments}) => {
    if (haveComments) {
        return (
            <>
                <table>
                    <tbody>
                        <TableRow text={'good'} value={good}/>
                        <TableRow text={'neutral'} value={neutral}/>
                        <TableRow text={'bad'} value={bad}/>
                        <TableRow text={'all'} value={all}/>
                        <TableRow text={'average'} value={average}/>
                        <TableRow text={'positive'} value={positive}/>
                    </tbody>
                </table>
            </>
        )
    } else {
        return <p>No feedback given</p>
    }
}

const Button = ({text, handler}) => {
    return <button onClick={handler}>{text}</button>
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