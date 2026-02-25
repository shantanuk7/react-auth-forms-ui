import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/singup" element={<Signup/>}/>
      </Routes>
    </>
  )
}

export default App
