import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Home from './Home';
// CHECKOUT DISABLED
// import Cart from './cart/Cart';
import ViewItem from './viewItem/ViewItem';
// CHECKOUT DISABLED
// import OrderPlaced from './orderPlaced/OrderPlaced';
import AboutMe from './aboutMe/AboutMe';
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
            {/* CHECKOUT DISABLED */}
            {/* <Route path="/cart" element={<Cart />} /> */}
            <Route path="/product:id" element={<ViewItem />} />
            {/* CHECKOUT DISABLED */}
            {/* <Route path="/Thankyou" element={<OrderPlaced />} /> */}
            <Route path="/AboutMe" element={<AboutMe />} />
          </Routes>
        </ShoppingState>
      </Router>
    </div>
  );
}

export default App;
