import React, { Component } from 'react';
import './App.css';
import Sidebar from "../components/chat/Sidebar";
import MessagesList from "../components/chat/MessagesList";
import StorageAdaptor from '../utils/StorageAdaptor';
import queryString from 'query-string'
import AddMessage from "../components/chat/AddMessage"
import Store from "../utils/Store"
import axios from "axios"

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      messages: [],
      users: [],
      scrollPos: 0
    }
    this.getMessages = this.getMessages.bind(this)
  }
  componentWillMount(){

     var params = queryString.parse(window.location.search)

     if (params["auth_token"] && params["uid"] && params["client_id"] && params["expiry"]) {

       var auth_details = {};
       auth_details["access-token"]=params["auth_token"];
       auth_details["uid"]=params["uid"];
       auth_details["client"]=params["client_id"];
       auth_details["expiry"]=params["expiry"];
       auth_details["token-type"]="Bearer";
       StorageAdaptor.setObject("auth_details",auth_details);
       StorageAdaptor.setItem("authenticated","true");
       params["auth_token"] = undefined;
       params["uid"] = undefined;
       params["client_id"] = undefined;
       params["expiry"] = undefined;
       window.location.search = '?';
     }



     window.setInterval(this.getMessages, 1000)
   }

   shouldComponentUpdate(nextProps, nextState) {
     if (nextState.messages == this.state.messages) {
       return false
     }
     return true
   }
   componentWillUpdate(nextProps, nextState) {
       this.setState({scrollPos: document.body.scrollHeight - document.body.clientHeight})
   }

   componentDidUpdate(prevProps, prevState){
       if(document.documentElement.scrollTop >= this.state.scrollPos) {
           window.scrollTo(0, document.body.scrollHeight)
       }

   getMessages() {
     axios.get("http://unomni.com:3000/clusters/1/")
     .then(response => this.setState({messages: response.data.messages}))
     axios.get("http://unomni.com:3000/clusters/1/")
     .then(response => this.setState({users: response.data.users}))
   }




   addMessage = (messagecontent)=> {
     Store.post("messages", {message_content:messagecontent}).then((createdMessage)=>{
       let newmessages = this.state.messages.concat([createdMessage])
       this.setState({messages:newmessages})
     })


   }
    render() {
      let {messages,users} = this.state
        return (
            <div id="container">
                <section id="main">
                    <MessagesList messages={messages}/>
                    <AddMessage onAddMessage={this.addMessage}/>
                </section>
                <Sidebar users={users} />
            </div>
        )
    }
}

export default App;
