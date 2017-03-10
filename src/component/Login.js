import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import 'whatwg-fetch'
import {host} from './host'
import {browserHistory} from 'react-router'
class Login extends React.Component {


      constructor(props){
          super(props);
          this.state= {
              username : "" ,
              password : ""
          }
          this.setPassword = this.setPassword.bind(this);
          this.setUsername = this.setUsername.bind(this);
          this.login = this.login.bind(this);
      }


      setPassword(e){
          this.setState({
            password : e.target.value
          })
      }
      setUsername(e){
        this.setState({
          username : e.target.value
        })
      }

      login(e){
        e.preventDefault();
        fetch(host+"api/user/login" , {
          method: 'POST',
           headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
           },
           body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
              })
        }).then( (res) => {
          return res.json()
        }).then((res) => {
          localStorage.setItem("token" , res.token);
          localStorage.setItem("username" , res.username);
          browserHistory.push('/');
        }).catch((err) =>{
          console.log(err)
        })
      }

    static contextTypes : {
        router: React.PropTypes.func.isRequired
      }

  render(){
    return(
      <div className="main-wrapper">
          <Nav />
          <section className="mainContentSection singlePackage">
          <br/><br/>
              <div className="container" style={{width: 720}}>
                    <div className="col-sm-12 col-xs-12">
                    <center>
                        <div className="portlet light">
                            <div className="portlet-title">
                                <center>
                                  <div className="caption font-kademy">
                                    <h3>LOGIN</h3>
                                  </div>
                                </center>
                            </div>
                            <div className="portlet-body">
                              <div className="row">
                                <center>
                                <p>Login with Social</p>
                                <br/>
                                    <div className="col-md-12">
                                    <button className="btn btn-facebook"><i className="fa fa-facebook-official" aria-hidden="true"></i><span style={{marginLeft: 7}}>Log In with Facebook</span></button>
                                    </div>
                                </center>
                              </div>
                              <div className="row">
                              <br/>
                              <br/>
                                <center>
                                <p>Login with existing account</p>
                                <br/>
                                <br/>
                                <br/>
                                    <div className="col-md-12">
                                    <form className="form-horizontal">
                                            <div className="form-group">
                                              <label className="control-label col-sm-2">username:</label>
                                              <div className="col-sm-10">
                                                <input type="text" onChange={this.setUsername} className="form-control"  placeholder="Enter username" />
                                              </div>
                                            </div>
                                            <div className="form-group">
                                              <label className="control-label col-sm-2">Password:</label>
                                              <div className="col-sm-10">
                                                <input type="password" onChange={this.setPassword} className="form-control"  placeholder="Enter password"/>
                                              </div>
                                            </div>
                                            <div className="form-group">
                                              <div className="col-sm-offset-2 col-sm-3">
                                                <div className="checkbox">
                                                  <input type="checkbox" /> Remember me
                                                </div>
                                              </div>
                                            </div>
                                            <div className="form-group">
                                              <div className="col-sm-offset-2 col-sm-2">
                                                <button type="button" onClick={this.login} className="btn btn-block buttonCustomPrimary">Submit</button>
                                              </div>
                                            </div>
                                            </form>
                                    </div>
                                </center>
                              </div>
                            </div>
                        </div>
                        </center>
                    </div>
              </div>
            </section>
            <Footer />
      </div>
    )
  }
}

export default Login
