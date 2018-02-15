import React from 'react'
import propTypes from 'prop-types'

const Message = ({message, author, timestamp="doesn't work"}) => (
    <div>
        <p>
            <i>{author}</i>: {message}
        </p>
        <p>
            <i style={{color:'grey'}}>{timestamp}</i>
        </p>
    </div>
    )

Message.propTypes = {
    message: propTypes.string.isRequired,
    author: propTypes.string.isRequired
}

export default Message