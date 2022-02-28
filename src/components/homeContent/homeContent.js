import React from 'react'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn, StickyOut } from "react-scroll-motion";
import {
    BrowserRouter as Router,
  Link
  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';

import ParticleConfig from './assets/config/particle-config.json'

function HomeContent() {
    
        const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
        const FadeUp = batch(Fade(),Sticky(), Move(),MoveOut());
        const theoneineed = batch(Fade(), Sticky(), MoveOut(0, -200))
  
    return (
     
            <ScrollContainer > 
               
              <ScrollPage page={0}>
                <Animator animation={FadeUp}>
                    <div class='container'>
                    <div class='row'>
                    <div class='col-sm-6'>
                        <h2 class='text'>Soft Matter</h2>
                      
                        <a href="#physics"> <h1 className="display-2">Physics</h1></a>
                        <p className="h6 paraone">
                          Recently, I worked in a voluntary internship for a month in Soft Matter Physics in School of Physics and Astrononmy in University of Edinburgh. 
                        The project revolved around finding a reliable method for particle sizing in Multi-modal suspensions.
                        <hr></hr>
                        <a href="#physics"> Read More ></a>
                        </p>

                    </div>
                    </div>
                    </div>
                
                </Animator>
              </ScrollPage>
              <ScrollPage page={1}>
                <Animator animation={FadeUp}>
                <div class='container'>
                    <div class='row'>
                    <div class='col-sm-6'>
                        <h2 class='text'>Street</h2>
                        
                        <a href="#photography"> <h1 className="display-2">Photography</h1></a>
                        <p className="h6 paraone">
                          Last few years, I have been in love with Potrait Photography and have shot many of my friends and family. But with the post lockdown life, the lively atmosphere on the streets of Edinburgh 
                          has inspired me to develop my skills in Street Photography. I have been attempting to study photographs by Henri Cartier-Bresson and Robert Frank. Going out onto the streets unplanned is a bit unnerving but I have been improving my eye for details 
                          and compositions in street photography. 
                        <hr></hr>
                        <a href="#photography"> See the Photos ></a>
                        </p>

                    </div>
                    </div>
                    </div>
                </Animator>
              </ScrollPage>
              <ScrollPage page={2}>
                <Animator animation={FadeUp}>
                <div class='container'>
                    <div class='row'>
                    <div class='col-sm-6'>
                        <h2 class='text'>React</h2>
                        
                        <a href="#programming"> <h1 className="display-2">Programming</h1></a>
                        <p className="h6 paraone">
                        Since few years, web development and app development have been my core interests.
                        I built this website from scratch to teach myself React JS. Even though I was never very strong on JavaScript. Working with numerous Python and Android Development projects
                        have increased my   confidence in taking up something new and learning it.
                        <hr></hr>
                        <a href="#programming"> Read More ></a>
                        </p>

                    </div>
                    </div>
                    </div>
                </Animator>
              </ScrollPage>
              {/* <ScrollPage page={3}>
                <div className="display-2">
                  <span className="menu-items">
                    <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
                    <Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>- I'm Seonghyeok -
                    <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
                    <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
                  </span>
                </div>
              </ScrollPage> */}
              <ScrollPage page={3}>
                <Animator animation={batch(Fade(), Sticky())}>
                  <p>This is the end.<br>
                  </br>The site is still under-construction.</p>
                 
                </Animator>
                
              </ScrollPage>
            
            </ScrollContainer>
           
          );
        
        
    
}

export default HomeContent
