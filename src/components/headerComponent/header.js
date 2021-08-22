import React,{Component} from 'react'

import {Navbar, Container,Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class Header extends Component {
  render(){
  return (
    <header className="App-header">
   <Navbar bg="transparent" variant="dark">
  <Container>
    <Navbar.Brand href="#home" style={{fontFamily: 'JetBrains Mono'}} >Auro Varat<br></br> Patnaik</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
    <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
    <Nav>
      <Nav.Link href="#deets">About</Nav.Link>

    </Nav>
    </Navbar.Collapse>

  </Container>
  </Navbar>

    </header>
  );
  }
}
export default Header;
