import React from 'react'
import 'whatwg-fetch';
import Nav from './Nav'
import Footer from './Footer'
import {host} from './host'
import {browserHistory} from 'react-router'

class Register extends React.Component {

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
                                  <h3>Register</h3>
                                </div>
                              </center>
                            </div>
                            <div className="portlet-body">
                              <div className="row">
                              <br/>
                              <br/>
                                <center>
                                <br/>
                                <br/>
                                <br/>
                                    <div className="col-md-12">
                                    <form className="form-horizontal">
                                            <div className="form-group">
                                              <label className="control-label col-sm-2">username:</label>
                                              <div className="col-sm-10">
                                                <input type="text" className="form-control" onChange={this.setUsername} placeholder="Enter username" />
                                              </div>
                                            </div>
                                            <div className="form-group">
                                              <label className="control-label col-sm-2">Password:</label>
                                              <div className="col-sm-10">
                                                <input type="password" className="form-control" onChange={this.setPassword} placeholder="Enter password"/>
                                              </div>
                                            </div>
                                            <div className="form-group">
                                              <label className="control-label col-sm-2">Confirm Password:</label>
                                              <div className="col-sm-10">
                                                <input type="password" className="form-control"  placeholder="Confirm password"/>
                                              </div>
                                            </div>
                                            <div className="form-group">
                                              <label className="control-label col-sm-2">Name :</label>
                                              <div className="col-sm-10">
                                                <input type="text" className="form-control" onChange={this.setName}  placeholder="Enter name"/>
                                              </div>
                                            </div>
                                            <div className="form-group">
                                              <label className="control-label col-sm-2">Surname :</label>
                                              <div className="col-sm-10">
                                                <input type="text" className="form-control" onChange={this.setSurname} placeholder="Enter surname"/>
                                              </div>
                                            </div>
                                            <div className="form-group">
                                              <div className="col-sm-offset-2 col-sm-2">
                                                <button type="button" className="btn btn-block buttonCustomPrimary" onClick={this.register}>Submit</button>
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
export default Register
