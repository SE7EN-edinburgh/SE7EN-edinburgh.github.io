import React from 'react'
import { SocialIcon } from 'react-social-icons';

import {Navbar, Container,Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Footer() {
    return (
        <footer className="App-footer">
<Navbar fixed="bottom" style={{marginBottom: "16px"}} bg="transparent"  variant="dark" >
  <Container>
    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
    <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
    <Nav className="me-auto">
      <SocialIcon url="https://linkedin.com/in/aurovarat" bgColor="transparent" fgColor="white" />
      <SocialIcon url="https://github.com/AuroVarat" bgColor="transparent" fgColor="white" />
      <SocialIcon url="mailto:aurovaratpatnaik@gmail.com" bgColor="transparent" fgColor="white" />

  

    </Nav>
    </Navbar.Collapse>

  </Container>
  </Navbar>

        </footer>
    )
}

export default Footer
