import React from 'react'

import '../index.css'

const Notification = ({message, status}) => {
    if (message === null) {
        return null
    }

    return (
        <div className={status ? "success" : "error"}>
            {message}
        </div>
    )
}

export default Notification