import { connect } from 'react-redux'
import MessagesListComponent from '../components/chat/MessagesList'

export const MessagesList = connect(state => ({
    messages: state.messages
}), {})(MessagesListComponent)