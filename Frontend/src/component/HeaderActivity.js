import React from 'react'
import {host} from './host'
import 'whatwg-fetch'
class HeaderActivity extends React.Component{

    constructor(props){
      super(props)
      this.state = {
        url: []
      }
    }


    componentDidMount(){
        fetch(host+'api/cover/'+this.props.activity, {
          method : 'GET'
        }).then((res)=>{
          return res.json()
        }).then((res)=>{
          console.log(res)
          this.setState({
            url: res
          })
        })
    }

    render(){


      return(
        <div>
            {
              this.state.url.map((value , index)=> {
                return(
                     <div key={index} className="well col-sm-5 col-md-6 margintop" >
                         <center>
                            <img className="img-responsive img-hovers" src={value.cover_photo} style={{width : 500 }}/>
                            </center>
                         </div>
             
                )
              })

              }
              </div>
      )
    }
}
export default HeaderActivity
