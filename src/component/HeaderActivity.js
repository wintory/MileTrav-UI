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
                     <div key={index} className="container" style={{marginTop: 200}}>
                       <div className="row">
                         <div className="col-xs-12 col-md-12">
                         <center>
                            <img className="img-responsive img-hovers" src={value.cover_photo} style={{height: 300 , width : 500  }}/>
                            </center>
                         </div>
                       </div>
                     </div>
                )
              })

              }
              </div>
      )
    }
}
export default HeaderActivity
