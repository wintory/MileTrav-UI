import React,{Component} from 'react'
import 'whatwg-fetch';
import Home from './Home'
import Footer from './Footer'
import {host} from './host'
import {browserHistory} from 'react-router'

class Register extends Component {

                  constructor(props){
                    super(props);
                    this.state = {
                      username: "",
                      password: "",
                      name : "",
                      surname : "",
                      canRegist : true
                    }
                    this.setUsername = this.setUsername.bind(this);
                    this.setPassword = this.setPassword.bind(this);
                    this.setName = this.setName.bind(this);
                    this.setSurname = this.setSurname.bind(this);
                    this.register = this.register.bind(this);
                  }
                    setUsername(e){
                        this.setState({
                          username : e.target.value
                        });
                    }
                    setPassword(e){
                      this.setState({
                        password : e.target.value
                      });
                    }
                    setName(e){
                      this.setState({
                        name : e.target.value
                      });
                    }
                    setSurname(e){
                      this.setState({
                        surname : e.target.value
                      });
                    }

                    register(){
                      console.log('sending');

                        fetch(host+"api/user/register" , {
                          method: 'POST',
                           headers: {
                             'Content-Type': 'application/json',
                              'Accept': 'application/json'
                           },
                           body: JSON.stringify({
                                username: this.state.username,
                                password: this.state.password,
                                name: this.state.name,
                                surname : this.state.surname
                              })
                        }).then((res) =>{
                          console.log("res.json()");
                            return res.json()
                        }
                        ).then(
                          (res) => {
                            console.log(res);
                            localStorage.setItem("token" , res.token);
                            localStorage.setItem("username" , res.username);
                            browserHistory.push('/');
                          }
                        ).catch((err)=>{
                          console.log(err)
                        })
                    }
  render(){
    return(
       <div className="b">
         <Home/> 
      <div className="main-wrapper">
          
          
       <div className="container">
    <div className="col-md-6">
    <div id="logbox">
      <form id="signup" method="post" action="/signup">
        <h2>create an account</h2>
        <input onChange={this.setUsername} type="text" placeholder="What's your username?" pattern="^[\w]{3,16}$" autofocus="autofocus" required="required" className="input pass"/>
        <input onChange={this.setPassword} type="password" placeholder="Choose a password" required="required" className="input pass"/>
        <input  type="password" placeholder="Confirm password" required="required" className="input pass"/>
        <input onChange={this.setName} type="text" placeholder="Name" className="input pass" required="required"/>
        <input onChange={this.setSurname} type="text" placeholder="Surname" className="input pass" required="required"/>
        <input type="submit" onClick={this.register} value="Sign me up!" className="inputButton"/>
        <div className="text-center">
            already have an account? <a href="#" onClick={()=>this.openModal}>login</a>
        </div>
      </form>
    </div>
   </div>
   </div>
            
            <Footer />
      </div>
      </div>


    )
  }
}
export default Register
