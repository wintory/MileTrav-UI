import React from 'react'
import {Link} from 'react-router'
class Search extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      city : "Bangkok",
      price : "0-500"
    }
    this.setCity = this.setCity.bind(this)
    this.setPrice = this.setPrice.bind(this)
  }

  setCity(e){
      this.setState({
        city : e.target.value
      })
  }

  
  setPrice(e){
      this.setState({
        price : e.target.value
      })
  }

  render(){
    const city = ['Bangkok' ,'Chiangmai' , 'Phuket', 'Krabi', 'Chaingrai' ,'Chonburi', 'Ayutthaya' , 'Karnchanaburi' ]
    const price = ['0-500' ,'500-1000' , '1000-2500', '2500-5000', '5000-10000']

    return(
      
    
      <section className="search">
              <div className=" gridResize bgsearch ">
                <div className="col-sm-4 searchlogo slideshow">
                  <div className="sectionTitleDouble">
                    <p>Choose</p>
                    <h2>Your Activities</h2>
                  </div>
                </div>
                <div>

                    <div className="col-sm-3 searchbar">
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
                    <div className="col-sm-3 searchbar">
                      <div className="searchTour">
                          <span className='white'>Province</span>
                        <select onChange={this.setPrice} className="form-control">
                          {
                            price.map((value , index) => {
                              return(
                                  <option key={index} value={value}>{value}</option>
                              )
                            })
                          }
                        </select>
                      </div>
                    </div>
                     <div className="col-sm-2 searchbar">
       
                      <br/>
                       <Link to={'/to/'+this.state.city}><button type="button" className="btn btn-block buttonCustomPrimary">Search</button></Link>
                  
                     </div>
                  </div>
                </div>
          
          </section>
    )
  }
}

export default Search
