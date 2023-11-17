import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import DetailedProduct from './pages/DetailedProduct';
import Collections from './pages/Collections';
import RegisterPage from './pages/Register';
import LoginPage from './pages/Login';
import Page404 from './pages/404';

function App() {
  const token = localStorage.getItem('token')
  return (
    <Router>
      <Routes>
        <Route path='*' element={<Page404 />} />
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<DetailedProduct />} />
        <Route path='/collections' element={<Collections />} />
        <Route path='/register' element={<RegisterPage/>}/>
        <Route
        path="/login"
        element={
          token ? (
            <Navigate to="/" />
          ) : (
            <LoginPage />
          )
        }
      />
      </Routes>
    </Router>
  );
}

export default App;
