import React from 'react'
import {Link} from 'react-router'
class PopularActivities extends React.Component{
    constructor(props){
      super(props)
    }
    render(){
    /*  var pr = this.props.name.trim();
      var path = pr.replace(/ /g,"_");
      console.log(path)
      var url = '/img/cover/'+path+'.jpg';*/

      return(
         <div className="isotopeSelector">

          <figure>
            <img src="{this.props.cover}" alt=""/>
            <h4>{this.props.name}</h4>
            <div className="overlay-background">
              <div className="inner"></div>
            </div>
            <div className="overlay">
            <Link className="fancybox-pop" to={'/activity/'+this.props.name} >
              <div className="overlayInfo">
                <h5>from <span>{this.props.province}</span></h5>
              </div>
              </Link>
            </div>
          </figure>

        </div>
      )
    }
}
export default PopularActivities
