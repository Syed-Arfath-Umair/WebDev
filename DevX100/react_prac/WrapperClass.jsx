//First way passing the inner component as a prop
import { useState, memo } from 'react'

function App() {
  return (
    <WrapperCard innerComponent={<TextComponent />} />
  )
}

function TextComponent(){
  return(
    <div>
      Hello I am Jose Mourinho
    </div>
  )
}

function WrapperCard({innerComponent}){
  return(
    <div className="card" style={{
      border: "2px solid black",
    }}>
      {innerComponent}
    </div>
  )
}

export default App

//Second way accessing the children of the wrapper class

import { useState, memo } from 'react'

function App() {
  return (
    <WrapperCard>
      <div>
      Hi there!
      </div>
    </WrapperCard>
  )
}

function WrapperCard({children}){
  //children here means all the components defined inside the wrappercard component 
  return(
    <div className='card' style={{
      border: "2px solid black"
    }}>
      {children}
    </div>
  )
}

export default App
