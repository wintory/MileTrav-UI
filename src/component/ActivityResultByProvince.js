import React from 'react'
import Nav from './Nav'
import Search from './Search'
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
      <div className="main-wrapper">
        <Nav /><section className="mainContentSection singlePackage">
          <Search />
            <div className="container" style={{marginTop: 30}}>
            <div className="row">
            {
              this.state.activity.map( (value, index) => {
                return(
                  <CardActivityResult key={index} pic={value.cover_photo} name={value.activity_name} desc={value.activity_desc} />
                )
              })
            }
            </div>
            </div>
            </section>
            <Footer />
      </div>
    )
  }
}
export default ActivityResultByProvince
