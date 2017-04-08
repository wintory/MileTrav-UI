import React,{Component} from 'react'
import Home from './Home'
import Footer from './Footer'
import 'whatwg-fetch'
import {host} from './host'
import {browserHistory} from 'react-router'
import Modal from 'react-modal';
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
      <div className="b">
      <div className="main-wrapper">
          <section >
          <br/><br/>
              <div className="container">
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
      </div>
          <Footer />
      </div>
    )
  }
}

export default Login


const appElement = document.getElementById('your-app-element');



const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


export class App extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    this.refs.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref="subtitle">Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
    );
  }
}