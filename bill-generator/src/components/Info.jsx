import React, { Component } from 'react';

class Info extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
    <h2>Bienvenu sur votre générateur de devis</h2>
    <div>
      Créer un devis ? C'est simple : Cliquez sur <button onClick={this.props.onHandleShowEstimateForm}> nouveau devis</button>
    </div>
    </div>
         );
    }
}
 
export default Info;