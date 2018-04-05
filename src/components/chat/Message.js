import React from 'react'
import propTypes from 'prop-types'

const Message = (props) => (
    <div>
        <p>

           {props.message_content}
        </p>
        <p>

        </p>
    </div>
    )

// Message.propTypes = {
//     message: propTypes.string.isRequired,
//     author: propTypes.string.isRequired,
//     avatar: propTypes.string.isRequired
// }

export default Message
