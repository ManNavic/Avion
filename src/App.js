import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import DetailedProduct from './pages/DetailedProduct'
import Collections from './pages/Collections'
import RegisterPage from './pages/Register'
import LoginPage from './pages/Login'
import Page404 from './pages/404'
import ProfilePage from './pages/ProfilePage'
import { useEffect, useState } from 'react'

function App() {
  
  const [token, setToken] = useState(localStorage.getItem('token'));
  
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Page404 />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<DetailedProduct />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/login"
          element={token ? <Navigate to="/" /> : <LoginPage />}
        />
        <Route
          path="/profile"
          element={!token ? <Navigate to="/" /> : <ProfilePage />}
        />
      </Routes>
    </Router>
  )
}

export default App
