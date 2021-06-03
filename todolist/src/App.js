import React, { Component } from 'react'
import List from './List.js'
export default class App extends Component {
  constructor(props){
  super(props);
  this.state={
    showList:false,
  };
}
toggleList(){
  this.setState({showList:!this.state.showList})
}

  render() {
    return (
      <div>
        <h1>To Do List</h1>
            <List/>
      
      </div>
    )
  }
}

