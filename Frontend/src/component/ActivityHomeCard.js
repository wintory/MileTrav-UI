import React from 'react'
import {Link} from 'react-router'

class ActivityHome extends React.Component{

  render(){

    return(
     <div className="col-xs-12 col-sm-6 margintop">
       <div className="bgwhite">
        <Link to={'/activity/'+this.props.name}><img className="component" src={this.props.pic} style={{height:210}}/></Link>
         </div>
       </div>

    )
  }
}

export default ActivityHome
