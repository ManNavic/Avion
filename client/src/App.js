import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import DetailedProduct from './pages/DetailedProduct';
import Collections from './pages/Collections';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<DetailedProduct />} />
        <Route path='/collections' element={<Collections />} />
      </Routes>
    </Router>
  );
}

export default App;
