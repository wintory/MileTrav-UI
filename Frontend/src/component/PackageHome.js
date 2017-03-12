import React from 'react'
import PopularActivities from './PopularActivities'
import 'whatwg-fetch';
import {Link} from 'react-router'
import {host} from './host'
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
<section className="whiteSection">
 <div className="container">
   <div className="row">
     <div className="col-xs-12">
       <div className="sectionTitle">
         <h2><span>Popular Activity</span></h2>
         <p>These are our favourite & most Activities that you shouldn’t miss while in Thailand!</p>
       </div>
     </div>
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
 </div>
</section>

    )
  }
}
export default PackageHome
