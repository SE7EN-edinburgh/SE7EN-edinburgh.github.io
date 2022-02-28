import React from 'react'

import '../../assets/css/notfound.min.css';
import HeaderLight from '../../components/headerComponent/HeaderLight';
function NotFound() {
    return (
        <div className="noBody">
          <HeaderLight/>
         
        <div className="row" >
            <div className="col-sm-2" style={{backgroundColor:"transparent"}}></div>
            <div className="col-sm-8"style={{backgroundColor:"transparent"}}>

            <div class="jumbotron vertical-center">
        
        <div class="container">
        <p className="four">404</p>
                    <p className="display-5 th"  >
                  Page Not Found.
                    </p >
                    
        </div>
      </div>
                  

            </div>
            <div className="col-sm-2" style={{backgroundColor:"transparent"}}></div>
        </div>

  
        </div>
    )
}

export default NotFound
