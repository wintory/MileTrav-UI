import React, { Component } from 'react';
import {host} from './host'
import 'whatwg-fetch'
class HostDetail extends Component {
    constructor(props){
        super(props)
        this.state = {
            username : this.props.owner,
            pic : "",
            name : "" 
        }
    }

    componentDidMount() {
        fetch(host+'api/profile/'+this.state.username , {method : 'GET',
             headers: {
                     'Content-Type': 'application/json',
                     'Accept': 'application/json',
                     'Authorization': 'Bearer '+localStorage.getItem('token')
            }
        }).then((res)=>{
            return res.json()
        }).then((res)=>{
            this.setState({
                pic: res[0].cover_photo,
                name: res[0].first_name+" "+res[0].last_name
             })
        })   
    }
    

    render() {
        return (
            <div className="media packagesList" style={{marginTop: 20 , width: 775}}>
                <a className="media-left fancybox-pop" href={this.state.pic}>
                    <img className="media-object" src={this.state.pic} alt="Image" />
                  </a>
                  <div className="media-body">
                    <div className="bodyLeft">
                         <h4 className="media-heading">{this.state.name}</h4>
                    </div>
                 </div>
            </div>
        );
    }
}

export default HostDetail;