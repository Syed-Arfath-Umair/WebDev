//Wrong way - As it brings the whole client bundle and does heavy reload not navigation
import { Landing } from './pages/Landing';
import {  Dashboard } from './pages/Dashboard';
import {  Navbar } from './pages/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App(){
  return(
    <div>
      <div>
        <button onClick={()=>window.location.href='/'} >Landing</button>
        <button onClick={()=>window.location.href='/dashboard'} >Dashboard</button>
      </div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path= '/dashboard' element={<Dashboard/>} />
          <Route path='/' element={<Landing/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;

//useNavigate - Note: Always use the navigate hook inside browser router you can create new component and call the component in the browser router component

import { Landing } from './pages/Landing';
import {  Dashboard } from './pages/Dashboard';
import {  Navbar } from './pages/Navbar';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

function App(){
  return(
    <div>
      <Navbar />
      <BrowserRouter>
      <Appbar />
        <Routes>
          <Route path= '/dashboard' element={<Dashboard/>} />
          <Route path='/' element={<Landing/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Appbar(){
  const navigate = useNavigate();
  return (<div>
      <button onClick={()=>navigate('/')} >Landing</button>
      <button onClick={()=>navigate('/dashboard')} >Dashboard</button>
  </div>)
}

export default App;
