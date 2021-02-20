
import './App.css';
import Counters from './components/counters/Counters';
import Info from './components/info/Info';

import { useState, createContext } from "react";
export const Context = createContext();

function App() {

  const [result, setResult] = useState(0);

  function countRootSq() {
    setResult(Math.pow(result, 2));
  }
  function countByOne() {
    setResult(result + 1);
  }
  function countByTen() {
    setResult(result + 10);
  }

  return (
    <div className="App">
      <Context.Provider value={{
        countRootSq: countRootSq,
        countByOne: countByOne,
        countByTen: countByTen,
        result: result,
      }}>
        <Info />
        <Counters />
      </Context.Provider>
    </div>
  );
}

export default App;
