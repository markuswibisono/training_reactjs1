import logo from './logo.svg';
import './App.css';

import Navbar from 'react-bootstrap/Navbar';


import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';

import 'bootstrap/dist/css/bootstrap.min.css';
//import  NavigationBar from './navigation/NavigationBar';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">User Management</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link  componentClass={Link} href="/home" to="/home">Home</Nav.Link>
            <Nav.Link componentClass={Link} href="/daftaruser" to="/daftaruser">Daftar User</Nav.Link>
        </Nav>
        </Container>
    </Navbar>
    </>
  );
}

export default App;
