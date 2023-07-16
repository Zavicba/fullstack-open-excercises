import React from 'react'

const Filter = ({handleOnChangeFilter}) => {
    return (
        <div>
            <input onChange={handleOnChangeFilter}/>
        </div>
    )
}

export default Filter