import React from 'react'
import {host} from './host'
import 'whatwg-fetch'

class Tickets extends React.Component{
  constructor(props){
      super(props)
      this.state = {
        tickets: []
      }
  }

  componentDidMount(){
        fetch(host+'api/tickets/details/'+this.props.aid , {
          method: 'GET'
        }).then((res)=>{
            return res.json()
        }).then((res)=>{
          this.setState({
            tickets : res
          })
        })
  }

  render(){
    return(
      <div>
        <h4>Ticket</h4>
      {
        this.state.tickets.map((value , index)=>{
          return(
            <div key={index}  style={{marginTop: 20}}>
              <div className="caption">
                  <hr/>
                  <div className="row">
                    <div className="col-md-4">
                        <p className="acdesc">{value.ticket_name}</p>
                    </div>
                    <div className="col-md-3">
                        <p className="acdesc">{value.price} Baht</p>
                    </div>
                    <div className="col-md-4">
                        <select className="form-control">
                          <option value={1}>1 ticket</option>
                          <option value={2}>2 tickets</option>
                          <option value={3}>3 tickets</option>
                        </select>
                    </div>
                    <div className="col-md-2">
                      <i className="fa fa-shopping-cart"></i>
                    </div>
                  </div>
              </div>
            </div>
          )
        })
      }

      </div>
    )
  }
}
export default Tickets
