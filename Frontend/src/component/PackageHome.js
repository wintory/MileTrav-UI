import React from 'react'
import PopularActivities from './PopularActivities'
import 'whatwg-fetch';
import {Link} from 'react-router'
import {host} from './host'
import Home from './home'
import Footer from './footer'
import ActivityHomeCard from './ActivityHomeCard'
import Recommend from './Recommend'
import GalleryHome from './GalleryHome'

class PackageHome extends React.Component{

  render(){
    return(
      <div className="main-wrapper b">
      <Home/>
<section>
   <div className="row">
     <div className="col-xs-12 col-sm-6 content-block masonry-brick margintop">
       <div className="bgwhite">
         <img className="component" src="https://p-u.popcdn.net/content_blocks/backgrounds/000/000/003/original/REC_EV_1_LINE-1.jpg?1485235215"/>
         <Recommend topic="" outborder="col-sm-12 well"/>
         </div>  
       </div>

       <ActivityHomeCard pic="https://www.businessblogshub.com/wp-content/uploads/2016/12/event.jpg"/>
       <ActivityHomeCard pic="https://p-u.popcdn.net/content_blocks/backgrounds/000/000/050/original/become-org.png?1488169379"/>
            <div className="col-sm-6 col-xs-12 margintop">
       <div className="bgwhite">
         <img className="component" src="https://p-u.popcdn.net/content_blocks/backgrounds/000/000/002/original/UPC_EV_1_LINE-1.jpg?1485235233"/>
         <Recommend topic="" outborder="col-sm-12 well"/>
         </div>  
       </div>


       <div className="col-sm-6 col-xs-12 margintop">
       <div className="bgwhite">
         <img className="component" src="https://p-u.popcdn.net/content_blocks/backgrounds/000/000/047/original/Artboard_Copy_4_%281%29.png?1490953082"/>
         <Recommend topic="" outborder="col-sm-12 well"/>
         </div>  
       </div>
       
     </div>


</section>
 <Footer />
</div>
    )
  }
}
export default PackageHome
