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
        this.setState({scrollPos: document.body.scrollHeight - document.body.clientHeight})
    }
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.messages !== nextProps.messages

    }

    componentDidUpdate(prevProps, prevState){
        if(document.documentElement.scrollTop >= this.state.scrollPos) {
            window.scrollTo(0, document.body.scrollHeight)
        }
        fetch("http://localhost:3000/ranks", {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "rank_id": "1",
                "rank_type": false,
                "rank_name": "Advanced",
                "rank_description": "Tes"
            })
        })

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