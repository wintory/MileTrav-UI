import React,{Component} from 'react'
import 'whatwg-fetch';
import Home from './Home'
import Footer from './Footer'
import {host} from './host'
import {browserHistory} from 'react-router'

class Forgetpass extends Component {

                  constructor(props){
                    super(props);
                    this.state = {
                  
                    }
                  }
                    
  render(){
    return(
       <div className="b">
         <Home/> 
      <div className="main-wrapper">
       <div className="container">
    <div className="col-md-6">
   
   
   </div>
   </div>  
            <Footer />
      </div>
      </div>


    )
  }
}
export default Forgetpass
