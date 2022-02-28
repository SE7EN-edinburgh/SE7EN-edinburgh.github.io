import React,{ useState }  from 'react'
import {
  Link

} from 'react-router-dom';
import {Navbar, Container,Grid,Row,Col,Nav,Offcanvas,ListGroup,ListGroupItem} from 'react-bootstrap';
import '../../assets/css/home.min.css';
import { List } from 'react-bootstrap-icons';
import Footer from '../../components/footerComponent/footer'
import { Turn as Hamburger } from 'hamburger-react'
import { useHistory } from 'react-router-dom'

function Header() {
  const history = useHistory()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);
  return (
  <header className="App-header">
  
    <Offcanvas  className="overlay" placement={'top'} show={show} onHide={handleClose}>
  
        <Offcanvas.Body className='menuwrapper'>
          <div className='menu '>
          <ListGroup  variant='flush'>
  {/* <ListGroup.Item className='display-1'>Stories</ListGroup.Item>
  <ListGroup.Item className='display-1'>Health</ListGroup.Item>
  <ListGroup.Item className='display-1'>Issues</ListGroup.Item> */}
  <ListGroup.Item as={Link} to="/" className='display-1'>Home</ListGroup.Item>
  <ListGroup.Item   className='display-1'><a target="_blank" href="https://issuu.com/se7enedinburgh">Issues</a></ListGroup.Item>
  <ListGroup.Item as={Link} to="/about" className='display-1'>About</ListGroup.Item>
</ListGroup>
          </div>
        </Offcanvas.Body>
        <Footer/>
      </Offcanvas>
  


    <Container fluid>
    <Row className='header-h'>
      <Col className='subtitlewrap d-none d-lg-flex'>< p href="/" className="subtitle">Edinburgh</p></Col>
      <Col className='titleicon-wrap'> <a class="navbar-item" onClick={() => {
    history.push('/')
}}>< p href="/" className="titleicon display-1">SE7EN</p></a> </Col>
      <Col className='menuicon-wrap'><Hamburger color="#2f2f2f" className='menuicon' size={24} toggled={show} toggle={setShow} /></Col>
    
    </Row>
   
   <Row>
   <Col>
        {/* <Navbar   bg="transparent" >
        

            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            
            <Navbar.Collapse className="justify-content-center" id="responsive-navbar-nav">
          
            <Nav px-2>
                <Nav.Link as={Link} to="/deets">SOCIALS</Nav.Link> 
                <Nav.Link as={Link} to  ="/projects">ISSUES</Nav.Link> 
                <Nav.Link as={Link} to  ="/photography">ABOUT</Nav.Link>
              </Nav>
            
            </Navbar.Collapse>

          
            
        
        </Navbar> */}
  </Col>
  </Row>
</Container>
         
      
    </header>
  );

}
export default Header;
