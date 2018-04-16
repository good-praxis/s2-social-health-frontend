import React from 'react'
import propTypes from 'prop-types'

class AddMessage extends React.Component{
    state = {
      messagecontent:"",


    }
    submit = (e) => {
      if (this.state.messagecontent !== ""){
        this.props.onAddMessage(this.state.messagecontent)
        this.setState({messagecontent:""})
      }
      e.preventDefault()
    }
    // let input
    render(){
      return (
          <section id ="new-message">
              <form onSubmit={this.submit}>
                <input
                    value = {this.state.messagecontent}
                    // onKeyPress={(e) => {
                    //     if (e.key === 'Enter') {
                    //         props.dispatch(input.value, 'Me', "images/001-chameleon.png")
                    //         input.value = ''
                    //     }
                    // }}
                    type="text"
                    onChange={e=>this.setState({messagecontent:e.target.value})}
                />
              </form>
          </section>
       )
     }

}

export default AddMessage
