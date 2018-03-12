import React from 'react'
import propTypes from 'prop-types'

const AddMessage = (props) => {
    let input

    return (
        <section id ="new-message">
            <input
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        props.dispatch(input.value, 'Me', "images/001-chameleon.png")
                        input.value = ''
                    }
                }}
                type="text"
                ref={(node) => {
                    input = node
                }}
            />
        </section>
     )

}
AddMessage.propTypes = {
    dispatch: propTypes.func.isRequired
}

export default AddMessage