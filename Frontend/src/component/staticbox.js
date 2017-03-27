import React,{Component} from 'react'

export default class StaticBox extends Component{

  constructor(props){
      super(props)
      this.state = {
        user : 760,
        activity : 1208,
        destination : 1208
      }
      setInterval(()=> {
        this.setState({destination: this.state.destination+1})
      }, 1000);
      setInterval(()=> {
        this.setState({activity : this.state.activity+1})
      }, 1000)
      setInterval(()=>{
        this.setState({user : this.state.user+1})
      }, 5000)

  }



  render(){
    let {user,activity,destination} = this.state
    return(
      <div className="col-xs-12 col-sm-6">
     <section className="countUpSection bgblack">
      <div className="container">
        <div className="row">
          <div className="col-sm-3 col-xs-6">
            <div className="text-center">
              <div className="icon">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
              </div>
              <div className="counter">179</div>
              <h5>Destinations</h5>
            </div>
          </div>
          <div className="col-sm-3 col-xs-6">
            <div className="text-center">
              <div className="icon">
                <i className="fa fa-gift" aria-hidden="true"></i>
              </div>
              <div className="counter">48</div>
              <h5>tour pack</h5>
            </div>
          </div>
          <div className="col-sm-3 col-xs-6">
            <div className="text-center">
              <div className="icon">
                <i className="fa fa-smile-o" aria-hidden="true"></i>
              </div>
              <div className="counter">4562</div>
              <h5>happy clients</h5>
            </div>
          </div>
          <div className="col-sm-3 col-xs-6">
            <div className="text-center">
              <div className="icon">
                <i className="fa fa-life-ring" aria-hidden="true"></i>
              </div>
              <div className="counter">24</div>
              <h5>hours support</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    )
  }
}