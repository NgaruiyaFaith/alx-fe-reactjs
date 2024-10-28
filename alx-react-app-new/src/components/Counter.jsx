import { useState } from 'react';

function Counter() {
  // Initialize state for the count with a starting value of 0
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Current Count: {count}</p>
      <button 
        style={{ margin: '5px', padding: '10px 20px', fontSize: '16px' }}
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button 
        style={{ margin: '5px', padding: '10px 20px', fontSize: '16px' }}
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
      <button 
        style={{ margin: '5px', padding: '10px 20px', fontSize: '16px' }}
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
