import React, { Component } from 'react';
import './App.css';
import Info from './components/Info'

class App extends Component {
  state ={
    showForm: true
  };

handleShowEstimateForm = evt => {
  console.log(evt);
};

  render(){
     return (
      <Info onHandleShowEstimateForm={this.handleShowEstimateForm}/>
    );
  }
}

export default App;
