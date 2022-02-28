import React from 'react'
import { SocialIcon } from 'react-social-icons';

import {Navbar, Container,Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/home.min.css'
function FooterLight() {
    return (
        <footer className="App-footer">

  <Container fluid>
  <Navbar   variant="transparent" >
  <div className='footer-cred'>
                    <p>Design by <b><a target="_blank" href="https://aurovarat.github.io">Auro</a></b></p>
               </div>
  </Navbar>
  </Container>


        </footer>
    )
}

export default FooterLight
