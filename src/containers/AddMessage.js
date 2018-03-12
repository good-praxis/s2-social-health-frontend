import { connect } from 'react-redux'
import AddMessageComponent from '../components/chat/AddMessage'
import { addMessage } from '../actions'

const mapDispatchToProps = dispatch => ({
    dispatch: (message, author, avatar) => {
        dispatch(addMessage(message, author, avatar))
    }
})

export const AddMessage = connect (() => ({}), mapDispatchToProps)(AddMessageComponent)