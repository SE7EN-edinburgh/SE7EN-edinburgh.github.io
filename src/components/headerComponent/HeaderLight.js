import React from 'react'
import {
  Link

} from 'react-router-dom';
import {Navbar, Container,Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function HeaderLight() {
 
  return (
    <header className="App-header light">
   <Navbar fixed="top" style={{marginTop:'8px',
  marginLeft: '8px',
  marginRight: '8px'}} bg="transparent"  variant="light">
  <Container>
    <Navbar.Brand href="/" style={{fontFamily: 'JetBrains Mono'}} >Auro Varat<br></br> Patnaik</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
    <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
    <Nav>
      <Nav.Link as={Link} to="/deets">About</Nav.Link>
      
      <Nav.Link as={Link} to  ="/projects">Projects</Nav.Link>
      <Nav.Link as={Link} to  ="/photography">Photography</Nav.Link>

    </Nav>
    </Navbar.Collapse>

  </Container>
  </Navbar>

    </header>
  );

}
export default HeaderLight;
