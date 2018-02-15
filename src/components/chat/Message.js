import React from 'react'
import propTypes from 'prop-types'

const Message = ({message, author, timestamp, date}) => (
    <div>
        <p>
            <i>{author}</i>: {message}
        </p>
        <p>
            <i style={{color:'grey'}}>{date} {timestamp}</i>
        </p>
    </div>
    )

Message.propTypes = {
    message: propTypes.string.isRequired,
    author: propTypes.string.isRequired
}

export default Message