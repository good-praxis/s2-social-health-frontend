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
  state = {
    messages: [],
    users: [],
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

     axios.get("http://unomni.com:3000/clusters/1/")
     .then(response => this.setState(response.data.messages))
     console.log("*notices your API* OwO what's this")
     window.setTimeout(getMessages, 250)
   }

   shouldComponentUpdate(nextProps, nextState) {
     if (nextState.messages == this.state.messages) {
       return false
     }
     return true
   }

   getMessages() {
     axios.get("http://unomni.com:3000/clusters/1/")
     .then(response => this.setState(response.data.messages))
     console.log("*pounces* yummy yummy messages uwu")
     window.setTimeout(getMessages, 250)
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
