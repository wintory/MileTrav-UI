import React from 'react'
import 'whatwg-fetch';
import {Link} from 'react-router'
import {host} from './host'
import Home from './home'

class GalleryHome extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      activity :  []
    }
  }

  componentDidMount(){
    fetch(host+'api/activities/popular', {
method: 'GET' }).then(
      (res) =>  res.json()
    ).then((res) =>
       {this.setState({
         activity : res
       })
      }
    )

  }

  render(){
    return(
      <div>
      gallery
      </div>
    )
  }
}
export default GalleryHome
