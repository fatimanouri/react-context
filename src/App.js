import './App.css';
import Parent from './component/parent/parent';
import {useState} from 'react';


function App() {

const [counter,setCounter]=useState(0);

  return (
   
      <div >
      <Parent/>
      <p>{counter}</p>
      </div>

  );
}

export default App;
