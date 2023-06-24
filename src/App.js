
import './App.css';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Heading from './Heading';
import { FaCalculator } from 'react-icons/fa';
function App() {
  const [value, setValue] = useState('');
 

  const handleEvaluate = () => {
    try {
      if(value.includes('^')){
        const [base, exponent] = value.split('^');
      const result = Math.pow(parseFloat(base), parseFloat(exponent));
      setValue(result.toString());
      }
      else{
      const evaluatedResult = eval(value);
      setValue(evaluatedResult)
      }
    } catch (error) {
      toast.error('Invalid expression entered', {
        position: toast.POSITION.TOP_RIGHT
      });
      setValue('');
    }
  };

  const handleClear = () => {
    setValue('');
  };
  const handleButtonClick = (e) => {
    const buttonValue = e.target.value;

    if (buttonValue === 'sqrt') {
      const result = Math.sqrt(parseFloat(value));
      setValue(result.toString());
    }
   else if (buttonValue === 'log') {
      const result = Math.log10(parseFloat(value));
      setValue(result.toString());
    }
    else if (buttonValue === 'ln') {
      const result = Math.log(parseFloat(value));
      setValue(result.toString());
    }
    else if (buttonValue === 'X !') {
      const num = parseInt(value);
      if (isNaN(num) || num < 0) {
        toast.error('Invalid expression entered', {
          position: toast.POSITION.TOP_RIGHT
        });
      } else {
        let result = 1;
        for (let i = 2; i <= num; i++) {
          result *= i;
        }
        setValue(result.toString());
      }
    }
     else {
      setValue(value + buttonValue);
    }
  };

  return (
    <div>
       <Heading/>
    <div className='container'>
     
      <div className='calculator'>
        <form action=''>
          <div className='screen'>
            <input type='text' value={value} readOnly />
          </div>
          <div>
            <input type='button' value='AC' onClick={handleClear} />
            <input type='button' value='C' onClick={() => setValue(value.slice(0, -1))} />
            <input type='button' value='.' onClick={(e) => setValue(value + e.target.value)} />
            <input type='button' value='/' onClick={(e) => setValue(value + e.target.value)} />
          </div>
          <div>
            <input type='button' value='7' onClick={(e) => setValue(value + e.target.value)} />
            <input type='button' value='8' onClick={(e) => setValue(value + e.target.value)} />
            <input type='button' value='9' onClick={(e) => setValue(value + e.target.value)} />
            <input type='button' value='*' onClick={(e) => setValue(value + e.target.value)} />
          </div>
          <div>
            <input type='button' value='4' onClick={(e) => setValue(value + e.target.value)} />
            <input type='button' value='5' onClick={(e) => setValue(value + e.target.value)} />
            <input type='button' value='6' onClick={(e) => setValue(value + e.target.value)} />
            <input type='button' value='+' onClick={(e) => setValue(value + e.target.value)} />
          </div>
          <div>
            <input type='button' value='1' onClick={(e) => setValue(value + e.target.value)} />
            <input type='button' value='2' onClick={(e) => setValue(value + e.target.value)} />
            <input type='button' value='3' onClick={(e) => setValue(value + e.target.value)} />
            <input type='button' value='-' onClick={(e) => setValue(value + e.target.value)} />
          </div>
          <div>
            <input type='button' value='log' onClick={handleButtonClick} />
            <input type='button' value='X !' onClick={handleButtonClick} />
            <input type='button' value='sqrt'  onClick={handleButtonClick} />
            <input type='button' value='ln'  onClick={handleButtonClick} />
          </div>
          <div>
            <input type='button' value='%' onClick={(e) => setValue(value + e.target.value)} />
            <input type='button' value='0' onClick={(e) => setValue(value + e.target.value)} />
            <input type='button' value='=' onClick={handleEvaluate} />
            <input type='button' value='^'  onClick={(e)=>setValue(value+e.target.value)} />
          </div>

        </form>
       
      </div>
    </div>
    </div>
  );
}

export default App;
