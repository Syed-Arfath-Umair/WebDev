import {  contextCount } from './pages/Context';
import React, { Suspense, useContext, useState } from 'react';

function App(){
  const [ count, setCount] = useState(0);
  return(
    <div>
      <contextCount.Provider value={{count, setCount}}>
        <Count />
      </contextCount.Provider>
    </div>
  )
}

function Count(){
  const {setCount} = useContext(contextCount)
  return(
    <div>
      <CountRenderer />
      <Buttons setCount={setCount}/>
    </div>
  )
}
function Buttons({setCount}){
  let {count} = useContext(contextCount);
  return <div>
    <button onClick={()=>setCount(count+1)} >increase</button>
    <button onClick={()=>setCount(count-1)} >decrease</button>
  </div>
}

function CountRenderer(){
  let {count} = useContext(contextCount);
  return <div>
    {count}
  </div>
}

export default App;
