import React, { useState } from 'react';
import Counter from './Counter';

export default function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  const handleClick = () => {
    setState({ count: count + 1 });
  };

  return (
    <div>
      <p>Counter</p>
      <Counter
        count={count}
        onClick={handleClick}
      />
      <p>
        {[1, 2, 3, 4, 5].map((i) => (
          <button type="button">{i}</button>
        ))}
      </p>
    </div>
  );
}
