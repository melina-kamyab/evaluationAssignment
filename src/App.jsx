import React from 'react';
import './App.css';
import { arrays } from './components/utils/arrays';
import { algorithms } from './components/utils/algorithms';
import CreditCardForm from './components/CreditCardForm/CreditCardForm';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const consecutiveLetters = algorithms("aaaaabbbbbbbbbccc" );
  const oddSums = arrays([61, 32, 51, 546]);


  return (
  <>
    <CreditCardForm/>
  </>
  );
}

export default App;
