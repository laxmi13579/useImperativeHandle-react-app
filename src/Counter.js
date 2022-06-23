import React, { forwardRef, useImperativeHandle, useState } from 'react'

const Counter = forwardRef((props,ref) => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    const yell = () => {
        alert('counnt is '+ count);
    }

    useImperativeHandle(ref,() => ({
        increment,
        yell,
    }));

  return (
    <div>
        <button onClick={increment}>Increase Count</button>
        <p>count: {count}</p>
    </div>
  )
});

export default Counter