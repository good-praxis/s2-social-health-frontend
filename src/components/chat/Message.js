import React from 'react'
import propTypes from 'prop-types'

const Message = ({message, author, timestamp, date, avatar}) => (
    <div>
        <p>
            <img src={avatar}
            alt="107378" 
            className="circle" 
            height="32" 
            width="32"/>
            <i>{author}</i>: {message}
        </p>
        <p>
            <i style={{color:'grey'}}>{date} {timestamp}</i>
        </p>
    </div>
    )

Message.propTypes = {
    message: propTypes.string.isRequired,
    author: propTypes.string.isRequired,
    avatar: propTypes.string.isRequired
}

export default Message