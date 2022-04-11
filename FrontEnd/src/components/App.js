import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Home from './Home';
import Cart from './cart/Cart';
import ViewItem from './viewItem/ViewItem';
import OrderPlaced from './orderPlaced/OrderPlaced';
import 'react-toastify/dist/ReactToastify.css';

import ShoppingState from '../context/ShoppingState';

function App() {
  return (
    <div className="App">
      <Router>
        <ShoppingState>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product:id" element={<ViewItem />} />
            <Route path="/Thankyou" element={<OrderPlaced />} />
          </Routes>
        </ShoppingState>
      </Router>
    </div>
  );
}

export default App;
