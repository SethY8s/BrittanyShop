import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./NavBar/NavBar";
import Intro from "./intro/Intro";
import Cart from './cart/Cart';

function App() {
  return <div className="App">
    
    <NavBar />
    <Intro />
    <Router>
      <Routes>
      <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
    
  </div>;
}

export default App;
