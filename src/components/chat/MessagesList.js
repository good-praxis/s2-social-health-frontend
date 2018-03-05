import React, {Component} from 'react'
import propTypes from 'prop-types'
import Message from './Message'

class MessagesList extends Component {
    constructor(props){
        super(props)
        this.state = {scrollPos: 0}
    }
    render() {
        return(
            <section id="messages-list">
                <ul>
                    {this.props.messages.map(message => (
                        <Message
                            key={message.id}
                            {...message}
                        />
                    ))}
                </ul>
            </section>
        )
    }
    componentWillUpdate(nextProps, nextState) {
        console.log("LOOK AT THIS FUCKING SHIT: ", document.body.scrollHeight, document.body.clientHeight)
        this.setState({scrollPos: document.body.scrollHeight - document.body.clientHeight})
        console.log("I HAZ UPDATE")
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log(this.props.messages !== nextProps.messages)
        return this.props.messages !== nextProps.messages

    }

    componentDidUpdate(prevProps, prevState){
        console.log("LOL")
        console.log(document.documentElement.scrollTop)
        console.log(this.state.scrollPos)
        if(document.documentElement.scrollTop >= this.state.scrollPos) {
            console.log("ROFL")
            window.scrollTo(0, document.body.scrollHeight)
        }

    }
}






MessagesList.propTypes = {
    message: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number.isRequired,
            message: propTypes.string.isRequired,
            author: propTypes.string.isRequired,
            timestamp: propTypes.string.isRequired,
            date: propTypes.string.isRequired
        }).isRequired
    )
}

export default MessagesList