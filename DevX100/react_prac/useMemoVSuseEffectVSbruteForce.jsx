//Bruteforce
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [ct, setCt] = useState(0);
  const [n, setN] = useState(1);
  let sum = 0;
  for(let i = 1; i<=n; i++){
    sum += i;
  }
  return(
    <div style={{
      padding: 10,
      margin: 10
    }}>
      <input placeholder='Enter the number' onChange={(e) =>setN(e.target.value)}/>
      <br /> <br />
      The sum is {sum} <br /> <br />
      <button onClick={()=>setCt(prevCt=>prevCt+1)}>Counter {ct} </button>
    </div>
  )
}

export default App;

//useEffect - optimal
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [ct, setCt] = useState(0);
  const [n, setN] = useState(1);
  const [sum, setSum] = useState(1);
  useEffect(() => {
    let s = 0;
    for(let i = 1; i<=n; i++){
      s += i;
    }
    setSum(s);
  }, [n]);
  return(
    <div style={{
      padding: 10,
      margin: 10
    }}>
      <input placeholder='Enter the number' onChange={(e) =>setN(e.target.value)}/>
      <br /> <br />
      The sum is {sum} <br /> <br />
      <button onClick={()=>setCt(prevCt=>prevCt+1)}>Counter {ct} </button>
    </div>
  )
}

export default App;

//useMemo - optimal and preferred
import [ useState, useMemo ] from 'react';

function App(){
  const [ ct, setCt ] = useState(0);
  const [ n, setN ] = useState(1);

  const sum = useMemo(() => {
      let k = 0;
      for(let i = 1; i<=n; i++) k+=i;
      return k;
  }, []);
  return(
    <div style={{
      padding: 10,
      margin: 10
    }}>
      <input placeholder='Enter the number' onChange={(e) =>setN(e.target.value)}/>
      <br /> <br />
      The sum is {sum} <br /> <br />
      <button onClick={()=>setCt(prevCt=>prevCt+1)}>Counter {ct} </button>
    </div>
  )
}
export default App;
