import React, { Component } from 'react';
import './App.css';
import Info from './components/Info'
import EstimateForm from './components/EstimateForm'

class App extends Component {
  state ={
    showForm: true
  };

handleShowEstimateForm = evt => {
  console.log(evt);
  this.setState({
    showForm: !this.state.showForm
  })
};

  render(){
     return (
       //React-Fragment
       <div>
      <Info onHandleShowEstimateForm={this.handleShowEstimateForm}/>
      <br/>
      {this.state.showForm && <EstimateForm/>}
      </div>
    );
    //this.state.showForm && <EstimateForm/> 
    //Si this.state.showForm est TRUE alors on affiche <EstimateForm/> sinon on ne l'affiche jamais
  }
}

export default App;
