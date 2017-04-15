import React from 'react'
import {host} from './host'
import 'whatwg-fetch'

class Schedule extends React.Component{

  constructor(props){
      super(props)
      this.state = {
        schedules: []
      }
  }

  componentDidMount(){
        fetch(host+'api/itinerary/details/'+this.props.aid , {
          method: 'GET'
        }).then((res)=>{
            return res.json()
        }).then((res)=>{
          this.setState({
            schedules : res
          })
        })
  }

  render(){
    return(
      <div>
        <h4>Itinerary</h4>
          <hr/>
              <center>
                    <table className="table">
                        <thead>
                          <tr>
                            <td><p className="actopic">Time</p></td>
                            <td><p className="actopic">Activity</p></td>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            this.state.schedules.map((value , index) =>{
                              return(
                                <tr key={index}>
                                  <td><p>{value.times}</p></td>
                                  <td><p>{value.itinerary_desc}</p></td>
                                </tr>
                              )
                            })
                          }
                        </tbody>
                    </table>
            </center>
      </div>
    )
  }
}

export default Schedule
