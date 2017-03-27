import React from 'react'
import {Link} from 'react-router'

class HomeCard extends React.Component{

  render(){

    return(
    <div className="card">
  <div className="card-block">
    <h4 className="card-title">Special title treatment</h4>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    )
  }
}

export default HomeCard
