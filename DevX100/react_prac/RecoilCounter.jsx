import {  contextCount } from './pages/Context';
import React, { Suspense, useContext, useState } from 'react';
import { countAtom } from './store/atoms/count';
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';

function App(){
  // const [ count, setCount] = useState(0);
  return(
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}

function Count(){
  return(
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  )
}
function Buttons(){
  let setCount = useSetRecoilState(countAtom);
  return <div>
    <button onClick={()=>setCount(count=>count+1)} >increase</button>
    <button onClick={()=>setCount(count=>count-1)} >decrease</button>
  </div>
}

function CountRenderer(){
  let count = useRecoilValue(countAtom);
  return <div>
    {count}
  </div>
}

export default App;
