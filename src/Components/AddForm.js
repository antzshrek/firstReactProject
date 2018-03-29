import React, { Component } from 'react';
import Layout from './MyLayout.js';

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {firstName: "", lastName: "", output: ""};
      
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }
  
  handleSubmit(e) {
    const {firstName, lastName} = this.state;
    this.setState({output: this.displayOutput(firstName, lastName)});
    e.preventDefault();
  }

  displayOutput(firstName, lastName) {
    return String(firstName) + " " + String(lastName);
  }

  render() {
    const {firstName, lastName, output} = this.state;
    return (
      <div className="Form">
        <h3>Please Fill the form below</h3>  
          <Layout>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="firstName">
                First Name:
                <input name="firstName" type="text" value={firstName} onChange={this.handleChange} placeholder="Please enter your First Name" />
              </label>
              <br/>
              <br/>
              <label htmlFor="lastName">
                Last Name:
                <input name="lastName" type="text" value={lastName} onChange={this.handleChange}  placeholder="Please enter your Last Name"/>
              </label>
              <br/>
              <br/>
              <button type="submit">Result</button>
            </form>
          </Layout>
        <br/>
        <h3>Output</h3>  
        <Layout className="output-box">           
              Output: <h1>{output} </h1>
              <span className="output"></span>
        </Layout>
      </div>
    );
  }
}

export default AddForm;