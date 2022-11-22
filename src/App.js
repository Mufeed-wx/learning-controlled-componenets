import { useEffect, useState } from "react";
import UseEffect from "./componenets/UseEffect";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('incrimrnted' + count)
    return () => {
      console.log('cleane up'+count);
    }
  },[count])
  return (
    <>
      <h1>count:{count}</h1>
      <button onClick={() => setCount(count + 1)}>incriment</button>
    </>
  )
}

export default App;
