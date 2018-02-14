import { connect } from 'react-redux'
import SidebarComponent from '../components/chat/Sidebar'

export const Sidebar = connect(state => ({
    users: state.users
}), {})(SidebarComponent)