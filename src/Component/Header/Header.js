
import React from 'react';
import {Navbar,Container,Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom';


const Header = () => {
 
    return (
        <div>
       <Navbar collapseOnSelect expand="lg" bg="dark" variant='dark' className='text-white'>
  <Container>
  <Navbar.Brand as={Link} to='/'>Faisal Commerce</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">

      <Nav.Link as={Link} className='text-white' to='/product'>Products</Nav.Link>
     
     
  
    </Nav>
   
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header