import React, { Component } from 'react'
import { Link } from 'react-router'
class RecommendCard extends React.Component {


    render() {
        return (
            <div>
                <div className="media col-sm-9" style={{ height: 120 }}>
                    <Link to="#" className="media-left" >
                        <img className="media-object" src="http://www.thaiticketmajor.com/concert/images/flo-rida/poster.jpg" style={{ width: 100, height: 100 }} alt="Image" />
                    </Link>
                    <div className="media-body">
                        <Link to="#" className="media-heading">Activity Name : Coming Soon</Link>
                    </div>
                    <br/>
                    <p><i className="fa fa-calendar" aria-hidden="true"></i>Location : Coming Soon</p>
                    <p><i className="fa fa-calendar" aria-hidden="true"></i>Date : Coming Soon</p>
                </div>
                <br/>
                <div className="col-sm-3">
                    <button type="button" className="btn btn-block buttonCustomPrimary" >Booking</button>
                </div>
                <br/>
                <br/>
                <br/>
            </div>

        )
    }
}
export default RecommendCard
