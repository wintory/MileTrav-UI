import React from 'react'
import PopularActivities from './PopularActivities'
import 'whatwg-fetch';
import {Link} from 'react-router'
import {host} from './host'
import Home from './home'
import Footer from './footer'
import HomeCard from './homecard'
import ActivityHome from './ActivityHome'
class PackageHome extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      activity :  []
    }
  }

  componentDidMount(){
    fetch(host+'api/activities/popular', {
method: 'GET' }).then(
      (res) =>  res.json()
    ).then((res) =>
       {this.setState({
         activity : res
       })
      }
    )

  }

  render(){
    return(
      <div className="b">
        <Home/>
<section>
   <div className="row">
     <div className="col-xs-12 col-sm-6 margintop">
       <div className="bgwhite">
         <img className="component" src="https://p-u.popcdn.net/content_blocks/backgrounds/000/000/003/original/REC_EV_1_LINE-1.jpg?1485235215"/>
         </div>  
          <HomeCard/>

       </div>

       <ActivityHome pic="https://p-u.popcdn.net/events/covers/000/001/462/original/Songkran2017_Banner.jpg?1487305672"/>
       <ActivityHome pic="https://p-u.popcdn.net/events/covers/000/001/648/original/WEB_Cover_1702x800.jpg?1490352329"/>

     </div>

   <div className="row isotopeContainer">
       {
         this.state.activity.map((value , index) => {
           return(
                  <PopularActivities name={value.activity_name} cover={value.cover_photo} key={index} province={value.province} />
           
           )
         })
       }
   </div>
</section>
 <Footer />
</div>
    )
  }
}
export default PackageHome
