import React from 'react'
import FooterLight from '../footerComponent/FooterLight'
import Header from '../headerComponent/header'
import HeaderLight from '../headerComponent/HeaderLight'
import  { Image}  from 'react-bootstrap'
import Gallery from 'react-grid-gallery';
import 'bootstrap/dist/css/bootstrap.min.css';

const IMAGES =
[{
        src: "../../assets/images/DSC_9027.jpg",
        thumbnail: "../../assets/images/DSC_9027.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,   
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: "",
        thumbnail: "",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: ""
},

{
        src: "",
        thumbnail: "",
        thumbnailWidth: 320,
        thumbnailHeight: 212
}]


        


function Photofeed() {
    return (
    
        
         <div className="aboutPage light">
         <HeaderLight/> 
      
        <div className="container">
     
             <div className="row">
                 <div className="col-sm-2" style={{backgroundColor:"transparent"}}></div>
                 <div className="col-sm-8"style={{backgroundColor:"white"}}>
                
                         <h4 className='text-muted'> </h4>
                         <a href="#physics"> <h1 className="display-3">
                           </h1></a>
                         
                           <Gallery images={IMAGES} enableImageSelection="False"/>

                 </div>
                 <div className="col-sm-2" style={{backgroundColor:"transparent"}}></div>
             </div>

        </div>
         <FooterLight/>
     </div>
    )
}

export default Photofeed
