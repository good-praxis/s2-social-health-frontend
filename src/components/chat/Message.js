import React from 'react'
import propTypes from 'prop-types'

const Message = ({message, author, timestamp, date}) => (
    <div>
        <p>
            <img src="//res.cloudinary.com/teepublic/image/private/s--QOCrZKv---/t_Preview/b_rgb:c8e0ec,c_limit,f_auto,h_313,q_90,w_313/v1506740646/production/designs/1939321_0" 
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
    author: propTypes.string.isRequired
}

export default Message