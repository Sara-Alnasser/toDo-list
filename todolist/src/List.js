import React, { Component } from 'react'

export default class List extends Component {
    constructor(props){
        super(props);
        this.state ={
        taskList:[],
        task:""
        }
        this.appendList = this.appendList.bind(this);
    }
      componentDidMount(){
        this.setState({taskList: ["Read ONE STORY"]});
    }
    AddTask(){
        let taskList = this.state.taskList 
        taskList.push(this.state.task)
        this.setState({
            taskList,
            task: ""
        })
    }
    appendList(event) {
        this.setState({
            task : event.target.value
        })
    }
    removeItem(){
        let taskList = this.state.taskList
        taskList.splice(0, taskList.length)
        this.setState({taskList})
    }

  
   
    render() {
        const taskList = this.state.taskList.map((item, index) => {
            return <li key={index}>
                  {item}
                  </li> })
        return (
            <div>
                
                <ul >
                 {taskList}
                </ul>
              
                <input type="text" value={this.state.task} placeholder="Enter what to do " onChange={this.appendList} />

                <button  className="btn btn-dark" onClick={()=>this.AddTask()}>Add item</button><br></br>

                <button  className="btn btn-danger" onClick={()=>this.removeItem()}>Remove list</button><br></br>
              
            </div>
           
        );

        
    }
}
