import React  ,{props}from 'react'
import 'whatwg-fetch';
import DetailLeft from './detailleft'
import {host} from './host';
class CardActivityDetailLeft extends React.Component {
  constructor(props){
    super(props)
    this.state = {
         activity : [],
         name : this.props.activity
       };
  }
  /*fetch(host+'api/activities' , {
        method: 'POST',
        mode: 'no-cors',
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'WWW-Authorization' : 'Bearer '+localStorage.getItem('token'),
         },
           body: JSON.stringify({
             name : this.state.name ,
             desc : this.state.desc ,
             province : this.state.province,
             location : this.state.location,
             type : this.state.type
        })
    }).then((res) => {
      return res.json()
    }).then((res) => {
      insertId = res.insertId
      console.log(res.insertId)
      console.log(insertId)
      //return firebase.storage().ref('activity_cover/'+img).put(this.state.cover)
    })

    .then((snapshot) => {
        return firebase.storage().ref('activity_cover'+'/'+img).getDownloadURL()
    }).then((url) => {
        console.log(url)
        this.setState({
          cover_url : url
        })
        return fetch(host+'api/activities/cover' , {
              method: 'POST',
              mode: 'no-cors',
               headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
                  'WWW-Authorization' : 'Bearer  '+localStorage.getItem('token')
               },
                 body: JSON.stringify({
                   id : insertId ,
                   url : this.state.cover_url
              })
            })
    }).then( (res) => {
      return res.json()
    }).then((res) => {
      console.log(res)
      console.log("finishes create activity")
    }).catch( (err) => {
      console.log(err)
    })*/

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
    render(){
      return(
        <div className="col-sm-12">
        {
          this.state.activity.map((value , index) => {
            return(
              <DetailLeft key={index} aid={value.activity_id} type={value.type} province={value.province} owner={value.owner} location={value.location} activity_name={value.activity_name} activity_desc={value.activity_desc}/>
            )
          })
        }
        </div>

      )
    }
}
export default CardActivityDetailLeft;
