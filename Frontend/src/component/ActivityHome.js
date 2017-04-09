import React from 'react'
import {Link} from 'react-router'

class ActivityHome extends React.Component{

  render(){

    return(
     <div className="col-sm-5 col-md-6 margintop">
       <div className="bgwhite">
        <img className="component" src={this.props.pic}/>
         </div>
       </div>

    )
  }
}

export default ActivityHome
