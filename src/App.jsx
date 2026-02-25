import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import UserContextProvider from './context/UserContextProvider';
import Login from './pages/Login';

function App() {
  return (
    <UserContextProvider>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="login" element={<Login/>}/>
        </Routes>
    </UserContextProvider>
  )
}

export default App
