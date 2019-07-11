import React from 'react';
 
const Info = (props) => {
  return (  
    <div>
    <h2>Bienvenu sur votre générateur de devis</h2>
    <div>
      Créer un devis ? C'est simple : Cliquez sur 
      <button onClick={props.onHandleShowEstimateForm}> nouveau devis</button>
    </div>
    </div>
  );
}
 
export default Info;

