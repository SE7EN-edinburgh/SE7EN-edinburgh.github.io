import React,{ useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import {Card,Button,Container,Row,Col,CardGroup} from 'react-bootstrap';
// assets

import '../../assets/css/home.min.css'
//Components
import Header from '../../components/headerComponent/header'
import FooterLight from '../footerComponent/FooterLight';
import postlist from "../../posts.json"
import Markdown from 'markdown-to-jsx';
import { Redirect } from 'react-router';

// //images
// import BodyImage from '../../assets/images/body_image.png'
// import TakeControl from '../../assets/images/take_control.png'
// import LoveLetter from '../../assets/images/love_letter.png'
// import WomanOut from '../../assets/images/women_out.png'

function HomeC(props) {
  const excerptList = postlist.map(post => {
    return post.content.split(" ").slice(0, 20).join(" ") + "..."
})
    return (
      <div className="home-screen">
      <Header/> 
      
            <div className='content'>
            <Container>
              
             
               
             
              
              <Row>
            <CardGroup>
            {postlist.length && 
                postlist.map((post, i) => {
                  return (  
          
              <Card key={i} className="post-card"> 

               <Link className="links" to={`/post/${post.id}`}>
                <Card.Img variant="top" src={post.coverurl} /> 
                <Card.Body>
                  <Card.Title className="di splay-6" >{post.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{post.author} | {post.date} </Card.Subtitle>
                  <Card.Text>
                   
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                 
                </Card.Footer>
                </Link>
              </Card>
             
                  )
                })
              }
            </CardGroup>
            </Row>
           
              </Container>
              <FooterLight/>
                  </div>
               
              
               </div>
    )
}

export default HomeC
