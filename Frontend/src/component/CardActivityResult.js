import React from 'react'
import {Link} from 'react-router'
class CardActivityResult extends React.Component{
  render(){



    return(

      <div className="col-md-4 col-xs-12">
        <div className="thumbnail">
            <img src={this.props.pic} alt="deal-image" style={{height: 340}}/>
            <Link to={'/activity/'+this.props.name} className="pageLink"></Link>
            <div className="caption margintop " style={{height: 100}}>
              <h5><Link to={'/activity/'+this.props.name} className="captionTitle">{this.props.name}</Link></h5>
              <p style={{color: '#262a2e'}}><span className="glyphicon glyphicon-pushpin"/> Location : {this.props.province}</p>
              <p style={{color: '#262a2e'}}><span className="glyphicon glyphicon-paperclip"/> Description :  {this.props.desc}</p>
            </div>
        </div>
      </div>
      

      /*<div className="col-md-4 col-xs-12">
        <div className="thumbnail deals">
            <img src={this.props.pic} alt="deal-image" />
            <Link to={'/activity/'+this.props.name} className="pageLink"></Link>
            <div className="caption">
              <h4><Link to={'/activity/'+this.props.name} className="captionTitle">{this.props.name}</Link></h4>
              <p>{this.props.desc}</p>
            </div>
        </div>
      </div>*/
    )
  }
}
export default CardActivityResult
