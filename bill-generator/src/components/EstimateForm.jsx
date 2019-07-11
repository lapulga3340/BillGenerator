import React, { Component } from "react";
import Item from "./Item";
import { renderPDFInDOM } from "./PdfMaker";
import InputText from "./InputText";

class EstimateForm extends Component {
  state = {
    id: "",
    title: "",
    customerFirstName: "",
    customerLastName: "",
    items: {}

    /*
      items: {
          "12345":{
              id: "345678",
              description: "Une description produit",
              qunatity: "1",
              taxte: 0.2,
              amount: 1500,
          }
          "12355":{
              id: "154879",
              description: "Une autre description produit",
              qunatity: "1",
              taxte: 0.2,
              amount: 1500,
          }
      }
      */
  };

  handleSubmit = evt => {
    //Stop form running as default, submitting form. We want single page app, we don't want that the button refresh the all page
    evt.preventDefault();
    console.log("Généré");
  };

  handleChange = (evt, name) => {
    const value = evt.currentTarget.value;
    console.log(name);
    this.setState({
      //To have multiple value we use [] in our object
      [name]: value
    });
  };

  addItem = () => {
    const id = Date.now().toString();
    //Grâce à ... on récupère tout ce que contient this.state.items
    const items = { ...this.state.items };
    console.log(this.items);
    items[id] = {
      id: id,
      description: "description",
      quantity: "1",
      taxe: 0.2,
      amount: 0
    };
    this.setState({ items: items });
  };

  onItemChange = (evt, item, field) => {
    console.log(evt.currentTarget.value, item, field);
  };

  handleItemChange = (evt, item, field) => {
    console.log(evt.currentTarget.value, item, field);
    const value = evt.currentTarget.value;
    const clonedItem = { ...item };
    clonedItem[field] = value;
    const clonedItems = { ...this.state.items };
    clonedItems[clonedItem.id] = clonedItem;
    this.setState({
      items: clonedItems
    });
  };

  render() {
    return (
      //On encapsule les éléments grâce à React.Fragment
      <React.Fragment>
        <div>Nouveau devis</div>
        <form onSubmit={this.handleSubmit}>
          <InputText
            label="ID"
            name="id"
            value={this.state.id}
            onChange={this.handleChange}
          />
          <InputText
            label="title"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <InputText
            label="Prénom du client"
            name="customerFirstName"
            value={this.state.customerFirstName}
            onChange={this.handleChange}
          />
          <InputText
            label="Nom"
            name="customerLastName"
            value={this.state.customerLastName}
            onChange={this.handleChange}
          />

          <button onClick={this.addItem}>Ajouter une ligne</button>
          {Object.keys(this.state.items).map((itemId, index) => (
            <Item
              key={index}
              item={this.state.items[itemId]}
              onItemChange={this.handleItemChange}
            />
          ))}
          <button onClick={() => renderPDFInDOM(this.state)}>
            Générer le devis
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default EstimateForm;
