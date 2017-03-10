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
      <div className="thumbnail blogSinglePost img-hovers" style={{marginTop: 20}}>
        <div className="caption">
        <h3>Itinerary</h3>
          <hr/>
              <center>
                    <table className="table">
                        <thead>
                          <tr>
                            <td>Time</td>
                            <td>Activity</td>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            this.state.schedules.map((value , index) =>{
                              return(
                                <tr key={index}>
                                  <td>{value.times}</td>
                                  <td>{value.itinerary_desc}</td>
                                </tr>
                              )
                            })
                          }
                        </tbody>
                    </table>
            </center>
        </div>
      </div>
      </div>
    )
  }
}

export default Schedule
