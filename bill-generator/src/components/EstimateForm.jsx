import React, { Component } from "react";

class EstimateForm extends Component {
  state = {
      id: '',
      title: '',
      customerFirstName: '',
      customerLastName: '',
      items: {

      }

  };

  handleSubmit = evt => {
    //Stop form running as default, submitting form. We want single page app, we don't want that the button refresh the all page
    evt.preventDefault();
    console.log("Généré");
  };
 
  handleChange = (evt, name) => {
      const value = evt.currentTarget.value
      console.log(name);
      this.setState({
          //To have multiple value we use [] in our object
          [name] : value 
      })
  }
  render() {
    return (
      //On encapsule les éléments grâce à React.Fragment
      <React.Fragment>
        <div>Nouveau devis</div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange = {evt => this.handleChange(evt, 'id')}
            type="texte"
            name="id"
            id="id"
            placeholder="Référence du devis"
            value= {this.state.id}
          /><br/>
           <input
            onChange = {evt => this.handleChange(evt, 'title')}
            type="texte"
            name="title"
            id="title"
            placeholder="Titre du devis"
            value= {this.state.title}
          /><br/>
           <input
            onChange = {evt => this.handleChange(evt, 'customerFirstName')}
            type="texte"
            name="customerFirstName"
            id="customerFirstName"
            placeholder="Prénom"
            value= {this.state.customerFirstName}
          /><br/>
           <input
            onChange = {evt => this.handleChange(evt, 'customerLastName')}
            type="texte"
            name="customerLastName"
            id="customerLastName"
            placeholder="Nom"
            value= {this.state.customerLastName}
          /><br/>
          <button type="submit">Générer le devis</button>
        </form>
      </React.Fragment>
    );
  }
}

export default EstimateForm;
