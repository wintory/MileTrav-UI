import React from 'react'
import {Link} from 'react-router'
class CardActivityResult extends React.Component{
  render(){



    return(
      <div className="col-md-4 col-xs-12">
        <div className="thumbnail deals">
            <img src={this.props.pic} alt="deal-image" />
            <Link to={'/activity/'+this.props.name} className="pageLink"></Link>
            <div className="caption">
              <h4><Link to={'/activity/'+this.props.name} className="captionTitle">{this.props.name}</Link></h4>
              <p>{this.props.desc}</p>
            </div>
        </div>
      </div>
    )
  }
}
export default CardActivityResult
