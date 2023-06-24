import React from 'react';
import { FaCalculator } from 'react-icons/fa';
import './Heading.css'
const Heading = () => {
  return (
    <header>
      <h1>Calculate Here</h1>
      <FaCalculator className="calculator-icon" />
    </header>
  );
};

export default Heading;
