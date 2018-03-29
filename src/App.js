import React, { Component } from 'react';
//import './App.css';
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
      </div>
    )};
  }

export default App;
