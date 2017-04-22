import React from 'react'
import Home from './Home'
import CardActivityResult from './CardActivityResult'
import 'whatwg-fetch'
import Footer from './Footer'
import { host } from './host'
class ActivityResultByProvince extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        province : this.props.params.province ,
        activity : [],
        minPrice: this.props.location.query.minPrice || '',
        maxPrice: this.props.location.query.maxPrice || '' ,
        category : this.props.location.query.category || '' 
      }
  }

  componentDidMount(){
    console.log("result")
    fetch(host+'api/activities/province/'+this.state.province+'?cate='+this.state.category+'&min='+this.state.minPrice+'&max='+this.state.maxPrice
    , { method: 'GET' }).then(
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
      activity : [],
      minPrice: nextProps.location.query.minPrice || '&',
      maxPrice: nextProps.location.query.maxPrice || '&',
      category : nextProps.location.query.category || '&'
    }
    console.log(this.state)
    fetch(host+'api/activities/province/'+this.state.province+'?cate='+this.state.category+'&min='+this.state.minPrice+'&max='+this.state.maxPrice, 
    { method: 'GET' }).then(
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
      <div className="main-wrapper b">
        <Home />
        <section>
          <div className=" margintopprovince">
            <div className="row ">
              <h3 className="middle ">{this.props.params.province}</h3>
              <br />

              {
                this.state.activity.map((value, index) => {
                  return (
                   <CardActivityResult key={index} bg={value.colorcode} pic={value.cover_photo} name={value.activity_name} province={value.province} />
                  )
                })
              }
            </div>
          </div>
          <Footer />
        </section>
      </div>
    )
  }
}
export default ActivityResultByProvince
