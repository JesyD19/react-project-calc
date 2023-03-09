import Calculator from './components/Calculator';
import { useState } from 'react';
import { evaluate} from 'mathjs';

const App = () => {
  const [input, setInput] = useState('');  

  const addInput= val => {
    setInput(input + val);
  };

  const calculatingResult = () => {
    if(input) {
      setInput(evaluate(input));
    }else {
      alert('Please enter values to perform calculations');
    }
  };

  const clearingResult = () => {
    setInput('');
  }

  return (
    <div>
      <h1 className='text-center mt-5' style={ {color:'white'} }>Calculator</h1>
      <Calculator 
        input={input} 
        handleClick={(e) => addInput(e.target.innerHTML)} 
        handleClear={clearingResult}
        handleResult={calculatingResult}
      />
    </div>
  );
}

export default App;