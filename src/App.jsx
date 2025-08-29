import { useState } from 'react';
import './App.scss';

export const App = () => {
  const [count, setCount] = useState(0);

  const addOne = () => {
    let newValue;
    setCount(prev => {
      newValue = prev + 1;
      return newValue;
    });
    return newValue;
  };

  const add100 = () => {
    let newValue;
    setCount(prev => {
      newValue = prev + 100;
      return newValue;
    });
    return newValue;
  };

  // DON'T change the code below
  const increase = () => {
    const newValue = addOne();
    if (newValue % 5 === 0) {
      add100();               
    }
  };

  return (
    <div className="App">
      <h1 className="App__title">{`Count: ${count}`}</h1>

      <button type="button" className="App__add-one" onClick={addOne}>
        Add 1
      </button>

      <button type="button" className="App__add-100" onClick={add100}>
        Add 100
      </button>

      <button type="button" className="App__increase" onClick={increase}>
        Increase
      </button>
    </div>
  );
};
