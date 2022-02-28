import React from 'react'
import { SocialIcon } from 'react-social-icons';

import {Navbar, Container,Nav,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Footer() {
    return (
    <footer className="App-footer">
      <Container fluid>   
        <Navbar fixed="bottom"  bg="transparent" >
            <Col>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse className="justify-content-center" id="responsive-navbar-nav">
                <Nav>
                  <SocialIcon url="https://www.instagram.com/se7enedinburgh/" bgColor="transparent" fgColor="#2f2f2f" />
                  <SocialIcon url="https://www.facebook.com/se7enedinburgh" bgColor="transparent" fgColor="#2f2f2f" />
                  <SocialIcon url="https://twitter.com/se7enedinburgh" bgColor="transparent" fgColor="#2f2f2f"/>
                  <SocialIcon url="https://www.linkedin.com/company/se7en-edinburgh/" bgColor="transparent" fgColor="#2f2f2f" />

              

                </Nav>
                <Navbar.Text  className="instructions" style={{}} >
                  
                  </Navbar.Text>
                </Navbar.Collapse>
            </Col>

        </Navbar>
      </Container>
    </footer>
    )
}

export default Footer
