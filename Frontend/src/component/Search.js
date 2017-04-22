import React from 'react'
import {Link} from 'react-router'
import Slider, { Range } from 'rc-slider';
class Search extends React.Component{
    constructor(props){
    super(props)
    this.state = {
      city : "Bangkok",
      category: 'Any',
      minPrice: 0,
      maxPrice: 4000
    }
    
    this.setCity = this.setCity.bind(this)
    this.setRedirectCity = this.setRedirectCity.bind(this)
    this.setRedirectCategory = this.setRedirectCategory.bind(this)
    this.setPrice = this.setPrice.bind(this)
  }
  setCity(e){
      this.setState({
        city : e.target.value
      })
  }

 setRedirectCity(e){
    this.setState({
        city : e.target.value
    },()=>{
      browserHistory.push('/to/'+this.state.city+'?category='+this.state.category+'&minPrice='+this.state.minPrice+'&maxPrice='+this.state.maxPrice)
    })
 }
 setRedirectCategory(e){
    this.setState({
        category : e.target.value
    },()=>{
      browserHistory.push('/to/'+ this.state.city+'?category='+this.state.category+'&minPrice='+this.state.minPrice+'&maxPrice='+this.state.maxPrice)
    })
 }
 setPrice(e){
   this.setState({
     minPrice: e[0],
     maxPrice: e[1]
   }, ()=>{
       browserHistory.push('/to/'+ this.state.city+'?category='+this.state.category+'&minPrice='+this.state.minPrice+'&maxPrice='+this.state.maxPrice)
   })
 }

  render(){
    const city = ['Bangkok' ,'Chiangmai' , 'Phuket', 'Krabi', 'Chaingrai' ,'Chonburi', 'Ayutthaya' , 'Karnchanaburi' ]
    const cate = ['Any','Arts','Appearance or Signing' , 'Attraction' , 'Camp, Trip, or Retreat','Concert or Shows' , 'Class, Training, or Workshop' , 'Game or Competition' , 'Rally' , 'Party or Social Gathering' , 'Other']


  if(this.props.page != 'result'){
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
                     <div className="col-sm-2 searchbar">
       
                      <br/>
                       <Link to={'/to/'+this.state.city}><button type="button" className="btn btn-block buttonCustomPrimary">Search</button></Link>
                  
                     </div>
                  </div>
                </div>
          
          </section>
    )
  }else{
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
                          <span className='white'>Category</span>
                        <select value={this.props.cate} onChange={this.setRedirectCategory} className="form-control">
                                      {
                                        cate.map((value , index) => {
                                          return(
                                              <option  key={index} value={value}>{value}</option>
                                          )
                                        })
                                      }
                                 </select>
                      </div>
                    </div>
                    <div className="col-sm-3 searchbar">
                      <div className="searchTour">
                          <span className='white'>Price</span>
                          <div style={{marginTop: 10}}>
                                  <Range allowCross={false} pushable={true}  defaultValue={[0,4000]} min={0} max={4000} onChange={this.setPrice} />
                           </div>
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
}

export default Search
