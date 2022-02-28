// Includes
import React from 'react'
import {HashRouter,Route, Switch ,Redirect} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import postlist from "./posts.json"


//assests
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/default.min.css'



// Components
import HomeC from './components/homeC/homeC';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import NotFound from './components/pages/NotFound';
import Post from "./components/pages/Post"
import Photog from "./components/pages/Photofeed"
import ScrollToTop from "./ScrollToTop"

function App(){
  
  return (
    
    <div className="App">


    <Container  fluid >
    
    
    <HashRouter basename={process.env.PUBLIC_URL}>
    <ScrollToTop>
    <Switch>
      <Route exact path="/">
          <HomeC/> 
       </Route>
      
       <Route exact path="/about" >
          <About/>
       </Route>
       <Route exact path="/projects" >
          <Blog/>
       </Route>
       <Route exact path="/photography" >
          <Photog/>
       </Route>
       <Route exact path="/post/:id" render={props => <Post {...props} />} />
       <Route exact path="/404" >
          <NotFound/>
       </Route>
       <Redirect to="/404" />
       </Switch>
       </ScrollToTop>
    </HashRouter>
    
    
   
    </Container>
    
    </div>
    );
  }

export default App;
