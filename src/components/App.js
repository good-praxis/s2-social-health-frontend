import React, { Component } from 'react';
import './App.css';
import { Sidebar } from "../containers/Sidebar";
import { MessagesList } from "../containers/MessagesList";
import { AddMessage } from "../containers/AddMessage"
import StorageAdaptor from '../utils/StorageAdaptor';
import queryString from 'query-string'

class App extends Component {
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
   }
    render() {
        return (
            <div id="container">
                <section id="main">
                    <MessagesList />
                    <AddMessage />
                </section>
                <Sidebar />
            </div>
        )
    }
}

export default App;
