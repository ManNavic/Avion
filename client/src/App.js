import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import DetailedProduct from './pages/DetailedProduct';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/products' element={<DetailedProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
