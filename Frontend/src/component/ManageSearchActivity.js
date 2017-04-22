import React from 'react'
import { Link } from 'react-router'
class ManageSearchActivity extends React.Component {

      constructor(props){
    super(props)
    this.state = {
      city : "All City",
      type : "All type"
    }
    this.setCity = this.setCity.bind(this)
    this.setType = this.setType.bind(this)
  }

  setCity(e){
      this.setState({
        city : e.target.value
      })
  }

  setType(e){
      this.setState({
        Type : e.target.value
      })
  }



    render() {
  const city = ['Bangkok' ,'Chiangmai' , 'Phuket', 'Krabi', 'Chaingrai' ,'Chonburi', 'Ayutthaya' , 'Karnchanaburi' ]
  const type = ["Adventure","Party","Sport" ]
        return (

            <div>
            <div className="col-sm-6">
                <input type="text" className="form-control" placeholder="Search by Activityname" />
            </div>
             <div className="col-sm-6">
                        <select onChange={this.setCity} className="form-control">
                          {
                            city.map((value , index) => {
                              return(
                                  <option key={index} value={value}>{value}</option>
                              )
                            })
                          }
                        </select>
                    </div>
                     <div className="col-sm-6 margintop">
                        <select onChange={this.setType} className="form-control">
                          {
                            type.map((value , index) => {
                              return(
                                  <option key={index} value={value}>{value}</option>
                              )
                            })
                          }
                        </select>
                    </div>
            <div className="col-sm-6 margintop">
                <button type="button" className="btn btn-block buttonCustomPrimary" >Search Activity</button>
            </div>
            </div>
        )
    }
}

export default ManageSearchActivity