import React from 'react'
import {Link} from 'react-router'
import {host} from './host'
import Home from './home'
import Footer from './footer'

class WishList extends React.Component{

  render(){
    return(
      <div className="main-wrapper b">
      <Home/>
<section>
   <div className="row">
     <div className="col-xs-12 col-sm-6 content-block masonry-brick margintop">
       <div className="bgwhite">
 
         </div>  
       </div>


            <div className="col-sm-6 col-xs-12 margintop">
       <div className="bgwhite">
         </div>  
       </div>


       <div className="col-sm-6 col-xs-12 margintop">
       <div className="bgwhite">
         </div>  
       </div>
       
     </div>


</section>
 <Footer />
</div>
    )
  }
}
export default WishList