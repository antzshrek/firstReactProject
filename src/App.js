import React, { Component } from 'react';
//import './App.css';
//import NameForm from './Components/NameForm';
import Form from './Components/Form';
import AddForm from './Components/AddForm';


class App extends Component {
  constructor()
{
  super();
  this.state = {
    forms: []
  }
}  

componentWillMount()
{
this.setState({forms: [
  {
    firstName: 'First Name',
    lastName: 'Last Name'
  }
]})
}
render() {
  
    return (
      <div className="App">
        <br/>
        <AddForm/>
        <Form forms ={this.state.forms}/>
      
      </div>
    )};
  }

   


export default App;
