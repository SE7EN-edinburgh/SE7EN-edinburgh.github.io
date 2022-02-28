import React,{ useState, useEffect } from 'react';

import Markdown from 'markdown-to-jsx';
import { Redirect } from 'react-router';
import {Card,Button,Container,Row,Col,CardGroup} from 'react-bootstrap';
//includes
import '../../assets/css/home.min.css';

//Components
import Header from '../../components/headerComponent/header'
import postlist from "../../posts.json"
import FooterLight from '../footerComponent/FooterLight';


function Post(props) {
    const validId = parseInt(props.match.params.id)
    if (!validId) {
        return <Redirect to="/404" />
    }
    const fetchedPost = {}
    let postExists = false
    postlist.forEach((post, i) => {
        if (validId === post.id) {
            fetchedPost.title = post.title ? post.title : "No title given"
            fetchedPost.date = post.date ? post.date : "No date given"
            fetchedPost.author = post.author ? post.author : "No author given"
            fetchedPost.content = post.content ? post.content : "No content given"
            postExists = true
        }
    })
    if (postExists === false) {
        return <Redirect to="/404" />
    }
    return (
        <div className="blog-screen"  >
            <Header/> 
           <div className="content">
       <Container>
                <div className="row" >
                    <div className="col-sm-2" style={{backgroundColor:"transparent"}}></div>
                    <div className="col-sm-8"style={{backgroundColor:"white"}}>

                            <h4 className='text-muted h6'>Published on {fetchedPost.date} by {fetchedPost.author} </h4>
                          <h1 className="display-3">
                            {fetchedPost.title}</h1>
                            
                            <p className="h6" style={{marginBottom:"60px"}}>
                               
                               
                                <br></br>
                               
                             <Markdown  options={{ wrapper: 'article' }}>{fetchedPost.content}</Markdown>
                          
    
                            <hr></hr>
            
                            </p >

                    </div>
                    <div className="col-sm-2" style={{backgroundColor:"transparent"}}></div>
                </div>
                </Container>
           </div>
        <FooterLight/>
        </div>
    )
}

export default Post
