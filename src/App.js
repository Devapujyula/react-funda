import logo from './logo.svg';
import './App.css';
import  Greet from './components/01Greet';
import Welcome from './components/02Welcome';
import Hello from './components/03Hello';
import Message from './components/04Message';
import React from 'react';
import UseOfState from './components/05UseOfState';
import Counter from './components/06Counter';


function App() {
  return (
    <div className="App"> 
    <Counter></Counter>
    
   {/* <Hello></Hello>
    
    <Hello></Hello>
    <Greet name="Sowmya" heroName="Wonder Women"><p>This is Children props</p></Greet>
    <Greet name="Madhu" heroName="Super Women"><button>Select</button> </Greet>
    <Greet name="Radha" heroName="Mysterious Women"> </Greet>

    <Welcome name="Sowmya" heroName="Wonder Women"></Welcome>
    <Welcome  name="Madhu" heroName="Super Women"></Welcome>
  <Welcome name="Radha" heroName="Mysterious Women"></Welcome>* */}
    </div>
  );
  

 
}

export default App;
