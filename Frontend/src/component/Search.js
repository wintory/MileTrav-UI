import React from 'react'
import {Link} from 'react-router'
class Search extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      city : "Bangkok"
    }
    this.setCity = this.setCity.bind(this)
  }

  setCity(e){
      this.setState({
        city : e.target.value
      })
  }

  render(){
    const city = ['Bangkok' ,'Chiangmai' , 'Phuket', 'Krabi', 'Chaingrai' ,'Chonburi', 'Ayutthaya' , 'Karnchanaburi' ]

    return(
      <section className="darkSection">
            <div className="container">
              <div className="row gridResize">
                <div className="col-sm-3 col-xs-12">
                  <div className="sectionTitleDouble">
                    <p>Choose</p>
                    <h2>Your <span>City</span></h2>
                  </div>
                </div>
                <div className="col-sm-9 col-xs-12">
                  <div className="row">
                    <div className="col-sm-4 col-xs-6">
                      <div className="searchTour">
                          <span className='white'>Province</span>
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
                    </div>
                     <div className="col-sm-4 col-xs-6">
                     <div className="searchTour">
                      <br/>
                       <Link to={'/to/'+this.state.city}><button type="button" className="btn btn-block buttonCustomPrimary">Search</button></Link>
                       </div>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    )
  }
}

export default Search
