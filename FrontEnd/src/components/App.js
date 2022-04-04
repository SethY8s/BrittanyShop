import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Home from './Home';
import Cart from './cart/Cart';
import ViewItem from './viewItem/ViewItem';

import ShoppingState from '../context/ShoppingState';

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}

      <Router>
        <ShoppingState>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product:id" element={<ViewItem />} />
          </Routes>
        </ShoppingState>
      </Router>
    </div>
  );
}

export default App;
