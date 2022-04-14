import React from 'react';
import QuoteCard from './component/QuoteCard';
import axios from 'axios';

const sampleSimpson = 
  {
    quote: 'Im sleeping in the bath tub',
    character: 'Marge Simpson',
    image: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMargeSimpson.png?1497567512205',
  }



function App() {
  const [simpsons, setSimpsons] = React.useState(sampleSimpson);

  const getSimpson = () => {
    // Send the request
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        console.log(data);
        setSimpsons(data[0]);
      });
  };
  
  
  return (
    <div className="App">
      <QuoteCard quote={simpsons}/>
      <button type="button" onClick={getSimpson}>Get Simpson</button>
    </div>
  );
}

export default App;
