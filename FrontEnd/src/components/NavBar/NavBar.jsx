import { useState, useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import navbarCSS from './navbar.module.css';
import ShoppingContext from '../../context/shopping-context';

export default function NavBar() {
  const { cart } = useContext(ShoppingContext);
  const location = useLocation()

  const [cartCount, setCartCount] = useState(0);

 
  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });
    setCartCount(count);
  }, [cart, cartCount]);
  // use effect rerenders it twice

  console.log(cart)

  if(location.pathname === '/Thankyou') {
    return null
  }
  

  return (
    <Navbar fixed="top" className="py-3" bg="light" expand="md">
      <Container fluid>
        <Link style={{ textDecoration: 'none' }} to="/">
          <Navbar.Brand href="#home">
            <span className={navbarCSS.art}>Brittany's Art</span>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className={navbarCSS.cartbtn}>
          <Nav>
            <span className="d-flex me-4">
              <Nav.Link className={navbarCSS.navLink} href="#">
                About me
              </Nav.Link>
              <Nav.Link className={navbarCSS.navLink} href="#art">
                Art
              </Nav.Link>
              <Nav.Link className={navbarCSS.navLink} href="#link">
                Contact
              </Nav.Link>
            </span>

            <Nav.Item>
              {/* cart section */}

              <Link to="/cart">
                <Button className="me-5" id={navbarCSS.cartbox}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                  </svg>
                  <span>{cartCount}</span>
                </Button>
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
