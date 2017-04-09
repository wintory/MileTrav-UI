import React from 'react'
import Nav from './Nav'
import Home from './Home'
import CardActivityResult from './CardActivityResult'
import 'whatwg-fetch'
import Footer from './Footer'
import {host} from './host'
class ActivityResultByProvince extends React.Component{
  constructor(props){
      super(props)
      this.state = {
        province : this.props.params.province ,
        activity : []
      }
  }

  componentDidMount(){
    fetch(host+'api/activities/province/'+this.state.province, { method: 'GET' }).then(
      (res) =>  res.json()
    ).then((res) =>
       {this.setState({
         activity : res
       })
      }
    )

  }
  componentWillReceiveProps(nextProps) {
    this.state = {
      province : nextProps.params.province ,
      activity : []
    }
    console.log(this.state.province)
    fetch(host+'api/activities/province/'+this.state.province, { method: 'GET' }).then(
      (res) =>  res.json()
    ).then((res) =>
       {this.setState({
         activity : res
       })
      }
    )

  }

/*  componentDidUpdate(){
    console.log(this.props.params.province)
    this.setState({
      province : this.props.params.province ,
      activity : []
    })
    fetch('http://localhost:8000/api/activities/province/'+this.state.province, { method: 'GET' }).then(
      (res) =>  res.json()
    ).then((res) =>
       {
         this.setState({
         activity : res
       })
      }
    )
  }*/


  render(){

    return(
      <div className="main-wrapper b">
            <Home/>
      <div className=" padding">
            <div className="container">
            <div className="row">
            <h2 className="middle">Bangkok</h2>
            <CardActivityResult/>
            <CardActivityResult/>
            <CardActivityResult/>
            <CardActivityResult/>
            <CardActivityResult/>
            {
              this.state.activity.map( (value, index) => {
                return(
                  <CardActivityResult key={index} pic={value.cover_photo} name={value.activity_name} desc={value.activity_desc} />
                )
              })
            }
            </div>
            </div>
            <Footer />
      </div>
      </div>
    )
  }
}
export default ActivityResultByProvince
