import styles from './Navbar1.module.css'; 
import logo from '../../assets/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Navbar1() {
  return (
    <Navbar expand="lg" className="navbar-head">
    <Container fluid>
      <Navbar.Brand className="navbar-brand">
        <img src={logo} alt="Logo" className='nav-img' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ color: 'white', borderColor: 'white' }}/>
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className={styles['nav-link']}>
          <Nav.Link as={Link} to="/" className="text-white">Home</Nav.Link>
          <Nav.Link as={Link} to='/products' className="text-white">All Products</Nav.Link>
          <Nav.Link as={Link} to="/about" className="text-white">About Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default Navbar1;