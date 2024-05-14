import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Button count = {count} setCount = {setCount}></Button>
    </div>
  )
}

function Button(props){
  function clickHandler(){
    props.setCount(props.count + 1);
  }
  return <button onClick={clickHandler}>
    Counter {props.count}
  </button>
}

export default App
