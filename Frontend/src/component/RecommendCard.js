import React, { Component } from 'react'
import { Link } from 'react-router'
class RecommendCard extends React.Component {

    render() {
        return (
            <div>
                <div className="media col-sm-9" style={{ height: 120 }}>
                    <Link to={'/activity/'+this.props.name} className="media-left" >
                        <img className="media-object" src={this.props.pic} style={{ width: 100, height: 100 }} alt="Image" />
                    </Link>
                    <div className="media-body">
                        <Link to={'/activity/'+this.props.name} className="media-heading">{this.props.name}</Link>
                    </div>
                    <p><i className="fa fa-calendar" aria-hidden="true"></i>{this.props.province}</p>
                </div>
                <div className="col-sm-3">
                    <Link to={'/activity/'+this.props.name}><button type="button" className="btn btn-block buttonCustomPrimary" >Booking</button></Link>
                </div>
                <br/>
                <br/>
                <br/>
            </div>

        )
    }
}
export default RecommendCard
