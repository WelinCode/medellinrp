import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Home from './pages/Homes';
import Products from './pages/Products';
import './index.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-dark">
          <Navbar />
          <Cart />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Products />} />
          </Routes>
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: '#1A1A1A',
                color: '#fff',
                border: '1px solid #FF8C00',
              },
            }}
          />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
