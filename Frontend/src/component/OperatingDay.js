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

             <div>
        <h4>Operating Day</h4>
          <hr/>
              <center>
                    <table className="table">
                        <thead>
                          <tr>
                            <td><p className="topic">Day</p></td>
                          </tr>
                        </thead>
                        <tbody>
                          {
                  this.state.date.map((value , index) => {
                      return(
                                <tr key={index}>
                                    <td>
                                   <p>{value.day_of_week}</p>
                                   </td>
                                </tr>
                      )
                  })
              }
                        </tbody>
                    </table>
            </center>
      </div>


        );
    }
}

export default OperatingDay;