import React, { Component } from 'react';
import Form from './Form';

class FormList extends Component {
  render() {
    return (
      <li className="Form">
        {this.props.forms.firstName} : {this.props.forms.lastName}
      </li>
    );
  }
}

export default FormList;
