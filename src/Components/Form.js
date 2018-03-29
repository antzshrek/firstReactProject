import React, { Component } from 'react';
import FormList from './FormList';

class Form extends Component {
  render() {
    let formList;
    if(this.props.forms){
        formList = this.props.forms.map(forms => {
            return(
                <FormList key={forms.firstName} forms = {forms} />
            );
        }); 
    }
    return (
      <div className="Form"> 
        {FormList}
        <br/>
      </div>
    );
  }
}

export default Form;