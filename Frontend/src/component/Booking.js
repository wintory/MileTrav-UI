import React from 'react'
import Tickets from './Tickets'
class Booking extends React.Component {

    
 constructor(props){
    super(props)
    this.state = {
         activity : [],
         name : this.props.activity
       };
  }




     componentDidMount(){
    fetch(host+'api/activities/detail/'+this.state.name, { method: 'GET' }).then(
      (res) =>  res.json()
    ).then((res) =>
       {this.setState({
         activity : res
       })
      }
    )

  }

    render() {
        return (
            <div className="col-sm-12">
                <div className="well">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3>Booking</h3>
                             {
          this.state.activity.map((value , index) => {
            return(
              <Tickets aid={value.activity_id}/>
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
export default Booking
