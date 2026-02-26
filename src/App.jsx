import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import UserContextProvider from './context/UserContextProvider';
import Login from './pages/Login';
import { ProtectedRoute } from './components/ProtectedRoute';
import CreateTicket from './pages/CreateTicket';

function App() {
  return (
    <UserContextProvider>
        <Routes>
          <Route element={<ProtectedRoute/>}>
            <Route path="/" element={<Home/>}/>
            <Route path='/create-ticket' element={<CreateTicket/>}/>
          </Route>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
    </UserContextProvider>
  )
}

export default App
