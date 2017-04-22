import React, { Component } from 'react';
import {host} from './host'
import 'whatwg-fetch'
class OperatingDay extends Component {

    constructor(props){
        super(props)
        this.state={
            date: []
        }
    }
    componentDidMount() {
        fetch(host+'api/operating_day/'+this.props.aid, {
            method : 'GET',
            headers: {
                     'Content-Type': 'application/json',
                     'Accept': 'application/json',
                     'Authorization': 'Bearer '+localStorage.getItem('token')
            }
        }).then((res)=>{
            return res.json()
        }).then((res)=>{
            console.log(res)
            this.setState({
                date : res
            })
        })
    }
    

    render() {
        return (
            <div className="thumbnail deals" style={{marginTop: 20, width: 775}}>
              <div className="caption">
                      <h3>Available day</h3>
              </div>
            <div  className="row">

              {
                  this.state.date.map((value , index) => {
                      return(
                                <div key={index} className="col-md-3">
                                   <p>{value.day_of_week}</p>
                                </div>
                      )
                  })
              }
              </div>
            </div>
        );
    }
}

export default OperatingDay;