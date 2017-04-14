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
         <div className="isotopeSelector bgwhite">

          <figure className=" bgwhite">
            <img className="col-sm-3" src="http://www.thaiticketmajor.com/imgUpload/images/p3(183).jpg" alt=""/>
            <h4>{this.props.name} name</h4>
          
            <div >
            <Link className="fancybox-pop" to={'/activity/'+this.props.name} >
              <div className="overlayInfo">
                <h5 className="col-sm-3">from <span>{this.props.province}</span></h5>
              </div>
              </Link>
            </div>
          </figure>

        </div>
      )
    }
}
export default PopularActivities
