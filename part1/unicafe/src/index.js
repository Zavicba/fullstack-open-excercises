import React, { useState } from 'react'
import ReactDOM from 'react-dom'

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

    return (
        <div>
            <h1>give feedback</h1>
            <button onClick={handleGood}>good</button>
            <button onClick={handleNeutral}>neutral</button>
            <button onClick={handleBad}>bad</button>

            <h2>statistics</h2>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <p>all {all}</p>
            <p>average {average}</p>
            <p>positive {positive} %</p>
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)