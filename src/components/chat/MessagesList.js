import React, {Component} from 'react'
import propTypes from 'prop-types'
import Message from './Message'

class MessagesList extends Component {
    constructor(props){
        super(props)
        this.state = {scrollPos: 0}
        this.state.messages = this.props.messages
    }
    render() {
      console.log(this.props.messages)
        return(
            <section id="messages-list">
                <ul>
                    {this.state.messages.map(message => (
                        <Message
                            //key={message.id}
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

    componentDidUpdate(prevProps, prevState){
        if(document.documentElement.scrollTop >= this.state.scrollPos) {
            window.scrollTo(0, document.body.scrollHeight)
        }

    }
}






// MessagesList.propTypes = {
//     message: propTypes.arrayOf(
//         propTypes.shape({
//             id: propTypes.number.isRequired,
//             message: propTypes.string.isRequired,
//             author: propTypes.string.isRequired,
//             timestamp: propTypes.string.isRequired,
//             date: propTypes.string.isRequired
//         }).isRequired
//     )
// }

export default MessagesList
