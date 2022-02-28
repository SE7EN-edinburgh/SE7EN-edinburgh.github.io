import React,{ useState, useEffect } from 'react';

import Markdown from 'markdown-to-jsx';

//includes
import '../../assets/css/home.min.css';

//Components
import Header from '../../components/headerComponent/header'
import FooterLight from '../../components/footerComponent/FooterLight';



function About() {
    const file_name = 'about.md';
	const [post, setPost] = useState('');

	useEffect(() => {
		import(`../../markdown/${file_name}`)
			.then(res => {
				fetch(res.default)
					.then(res => res.text())
					.then(res => setPost(res));
			})
			.catch(err => console.log(err));
	});
  
    return (
        <div className="about-screen">
            <Header/> 
            <div className='content'>
           <div className="container">
        
                <div className="row">
                    <div className="col-sm-2" style={{backgroundColor:"transparent"}}></div>
                    <div className="col-sm-8"style={{backgroundColor:"white"}}>
                  
                        
                    
                            <Markdown options={{ wrapper: 'article' }}>{post}</Markdown>
                          
                    
                   

                    </div>
                    <div className="col-sm-2" style={{backgroundColor:"transparent"}}></div>
                </div>

           </div>
           </div>
        
        </div>
    )
}

export default About
