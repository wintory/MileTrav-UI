import React from 'react'
import Tickets from './Tickets'
import Schedule from './Schedule'
import {Link} from 'react-router'
class Detail extends React.Component {
    render() {
        return (
            <div >
                <div className="well">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3>{this.props.activity_name} <Link to="/WishList"><span className="glyphicon glyphicon-bookmark"/></Link></h3>
                            <h4>Information</h4>
                            <dl className="dl-horizontal">
                                <dt><p className="actopic">Host</p></dt>
                                <dd><p className="acdesc">{this.props.owner}</p></dd>
                                <dt><p className="actopic">Province</p></dt>
                                <dd><p className="acdesc">{this.props.province}</p></dd>
                                <dt><p className="actopic">Location</p></dt>
                                <dd><p className="acdesc">{this.props.location}</p></dd>
                                <dt><p className="actopic">type</p></dt>
                                <dd><p className="acdesc">{this.props.type}</p></dd>
                                <dt><p className="actopic">Available Seat</p></dt>
                                <dd><p className="acdesc">30</p></dd>
                                <dt><p className="actopic">Price</p></dt>
                                <dd><p className="acdesc">$6,500</p></dd>
                            </dl>
                        </div>

                        <div className="col-sm-12">
                            <h4>Description</h4>
                            <p>{this.props.activity_desc}</p>
                        </div>
                    </div>
                    </div>
            </div>
        )
    }
}
export default Detail
