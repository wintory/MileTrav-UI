import React from 'react'
import Tickets from './Tickets'
import Schedule from './Schedule'
import {Link} from 'react-router'
import OperatingDay from './OperatingDay'
class DetailRight extends React.Component {
    render() {
        return (
            <div >
                <div className="well">
                    <div className="row">
                        <div className="col-sm-12">
                            <OperatingDay aid={this.props.aid}/>
                            <h3>{this.props.activity_name}</h3> 
                            <br />
                            <Tickets aid={this.props.aid} />
                            <br/>
                            <div className="col-sm-3"/>
                            <div className="col-sm-5">
                                <Link to="/Booking"><button type="button" className="btn btn-block buttonCustomPrimary" >Booking Now</button></Link>
                              </div>
                              <br/>
                              <br/>
                              <br/>
                    <Schedule aid={this.props.aid} />
              
                    </div>
                    </div>
                    </div>
                    
            </div>
        )
    }
}
export default DetailRight
