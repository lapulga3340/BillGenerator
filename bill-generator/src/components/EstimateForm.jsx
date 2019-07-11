import React, { Component } from "react";

class EstimateForm extends Component {
  state = {
      estimateTitle: '',
  };

  handleSubmit = evt => {
    //Stop form running as default, submitting form. We want single page app, we don't want that the button refresh the all page
    evt.preventDefault();
    console.log("Généré");
  };
 
  handleChange = evt => {
      const title = evt.currentTarget.value
      console.log(title);
      this.setState({
          estimateTitle : title 
      })
  }
  render() {
    return (
      //On encapsule les éléments grâce à React.Fragment
      <React.Fragment>
        <div>Nouveau devis</div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange = {evt => this.handleChange(evt)}
            type="texte"
            name="estimate-title"
            id="estimate-title"
            placeholder="Titre du devis"
            value= {this.state.estimateTitle}
          />
          <button type="submit">Générer le devis</button>
        </form>
      </React.Fragment>
    );
  }
}

export default EstimateForm;
