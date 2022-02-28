import React,{ useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import ReactMarkdown from "react-markdown"
import Markdown from 'markdown-to-jsx';
import {Card,Button} from 'react-bootstrap';
//includes
import '../../assets/css/default.min.css';
import '../../assets/css/about.min.css';
//Components
import Header from '../../components/headerComponent/header'

import postlist from "../../posts.json"

function Blog() {
  
    const excerptList = postlist.map(post => {
        return post.content.split(" ").slice(0, 20).join(" ") + "..."
    })
    return (
        <div className="aboutPage light postlist">
            <Header/> 
           <div className="container">
        
                <div className="row" >
                    <div className="col-sm-2" style={{backgroundColor:"transparent"}}></div>
                    <div className="col-sm-8"style={{backgroundColor:"white",marginBottom:"60px"}}>
                    {postlist.length && 
                postlist.map((post, i) => {
                    return (
                                                <Card key={i} className="post-card" style={{marginBottom:"18px"}}>
                        <Card.Header >Published on {post.date} by {post.author}</Card.Header>
                        <Card.Body>
                            <Card.Title><Link className="links" to={`/post/${post.id}`}>{post.title}</Link></Card.Title>
                            <Card.Text>
                            <Markdown options={{ wrapper: 'article' }}>{excerptList[i]}</Markdown>
                            </Card.Text>
                            <Button as={Link} to={`/post/${post.id}`} variant="dark" style={{color:'white'}}>Read more</Button>{' '}
                          
                        </Card.Body>
                        </Card>
                        
                        
                    )
                })
            }
                       
                       {/* <div key={i} className="post-card">
                            <h2><Link className="links" to={`/post/${post.id}`}>{post.title}</Link></h2>
                            <small>Published on {post.date} by {post.author}</small>
                            <hr/>
                            
                            <Markdown options={{ wrapper: 'article' }}>{excerptList[i]}</Markdown>
                            <small><Link className="links" to={`/post/${post.id}`}>Read more</Link></small>
                        </div> */}
                    </div>
                    <div className="col-sm-2" style={{backgroundColor:"transparent"}}></div>
                </div>

           </div>
        
        </div>
    )
}

export default Blog
