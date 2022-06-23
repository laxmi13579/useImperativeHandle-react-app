import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import { useRef } from 'react';

function App() {
  const ref = useRef();

  return (
    <>
      <Counter ref={ref}/>
      <button onClick={() => ref.current.increment()}>count increase by 1</button>
      <button onClick={() => ref.current.yell()}>what is the count</button>
    </>    
  );
}

export default App;
