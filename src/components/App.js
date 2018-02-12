import React, { Component } from 'react';
import '../../legacy/chat/src/App.css';
import { Sidebar } from "../../legacy/chat/src/containers/Sidebar";
import { MessagesList } from "../../legacy/chat/src/containers/MessagesList";
import { AddMessage } from "../../legacy/chat/src/containers/AddMessage"


class App extends Component {
  render() {
    return (
      <div id="container">
        <Sidebar />
        <section id="main">
          <MessagesList />
          <AddMessage />
        </section>
      </div>
    )
  }
}

export default App;