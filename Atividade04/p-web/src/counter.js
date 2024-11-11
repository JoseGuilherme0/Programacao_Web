import React, { useState, useEffect } from 'react';
import './counter.css';

function Counter() {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  const handleStop = () => {
    setIsActive(false);
  };

  return (
    <div className="counter-container">
      <h1>Contador: {count}</h1>
      <button onClick={handleStop}>Parar Contador</button>
    </div>
  );
}

export default Counter;
