// Includes
import React from 'react'
import {
  BrowserRouter as Router,

} from 'react-router-dom';
import Particles from 'react-particles-js';
import {Container} from 'react-bootstrap';



//assests
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/default.min.css'
import './assets/css/theother.css'
import ParticleConfig from './assets/config/particle-config'

// Components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';



function App(){
  
  return (
    
    <div className="App">
    <Container fluid>
      
    
    <Router>
    
    <Header/>
       <Footer/>

    </Router>
    {/* Background */}
    <Particles className="particleContainer" params={ParticleConfig} />
    </Container>
    </div>
    );
  }

export default App;
