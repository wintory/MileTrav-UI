import React from 'react'
import Tickets from './Tickets'
import Schedule from './Schedule'
import {host} from './host'
import HostDetail from './HostDetail'
import OperatingDay from './OperatingDay'
import 'whatwg-fetch'
class Detail extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            img : []
        }
    }

    componentDidMount() {
        fetch(host+'api/photo/'+this.props.aid, {method: 'GET'})
        .then((res)=>{
            return res.json()
        }).then((res)=>{
            //console.log(res)
           this.setState({
               img : res
           })     
        })
          
    }


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
                             {this.state.img.length > 0 &&
                                this.state.img.map((value , index)=>{
                                    return(
                                        <img src={value.photo_path} style={{width: 575, height: 575 , marginBottom: 20, marginRight: 100 , marginLeft: 100}} key={index}/>
                                    )
                                })      
                            }
                        </div>
                    </div>
                    </div>
            </div>
        )
    }
}
export default Detail
