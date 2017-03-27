import React from 'react'
import {Link} from 'react-router'

class ActivityHome extends React.Component{

  render(){

    return(
     <div className="col-xs-12 col-sm-6 margintop">
       <div className="bgwhite">
        <img className="component" src={this.props.pic}/>
         </div>
       </div>

    )
  }
}

export default ActivityHome
