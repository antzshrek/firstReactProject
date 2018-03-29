import React, { Component } from 'react';
import Layout from './MyLayout.js';

class AddForm extends Component {
  constructor(){
    super();
    this.state = {
      newForm: "Empty"
    }
    
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit(e){
      this.setState({newForm:e.target.value});
  }

  render() {
    return (
      <div className="Form">
        <h3>Please Fill the form below</h3>  
        <Layout>
          <form value = {this.state.newForm} onChange={this.handleSubmit} action= "" >
          <label>
            First Name:
            <input type="text" ref ='firstName'/>
          </label>
          <br/>
          <br/>
          <label>
            Last Name:
            <input type="text" ref ='lastName' />
          </label>
          <br/>
          <br/>
          <input type="submit" value="Submit" />
        </form>
        </Layout>
        <br/>
        <h3>Output</h3>  
        <Layout>
          <h6>            
              First Name: <h1>{this.state.newForm}</h1>
          </h6>
        </Layout>
      </div>
    );
  }
}

export default AddForm;