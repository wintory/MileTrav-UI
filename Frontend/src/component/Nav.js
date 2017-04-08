import React from 'react'
import Loading from 'react-loading'
import { Router, Link, browserHistory } from 'react-router'
import App from './Login'
import Modal from 'react-modal'


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

class Nav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      username: "",
       modalIsOpen: false,
      password : ""
    }
      this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.logout = this.logout.bind(this);
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
  
  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    this.refs.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  componentDidMount() {
    console.log(localStorage.getItem("token"));
    if (localStorage.getItem("token") == null || localStorage.getItem("token") === "undefined") {
      this.setState({
        isLogin: false
      })
    } else {
      this.setState({
        isLogin: true,
        username: localStorage.getItem('username')
      })
    }
  }

  logout(e) {
    e.preventDefault();
    console.log("remove token");
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    browserHistory.replace('/');
  }


  render() {
   let props = null

    if ((!this.state.isLogin) || this.state.username == "") {
      return (

        <header className="btm">
         <nav className="navbar">
  <div className="container-fluid nav">
    <div className="navbar-header">
      <Link to="/" className="navbar-brand"></Link>
    </div>
    <ul className="nav navbar-nav navbar-right">

         <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
      <form id="signup">
        <h1>login</h1>
        <button className="btn btn-facebook"><i className="fa fa-facebook-official" aria-hidden="true"></i><span >Log In with Facebook</span></button>
        <input onChange={this.setUsername} placeholder="enter your username" className="input pass"/>
        <input onChange={this.setPassword}  type="password" placeholder="enter your password" required="required" className="input pass"/>
        <input type="button" onClick={this.login} value="Sign me in!" className="inputButton"/>
        <div className="text-center">
                    <a href="#" id="">create an account</a> - <a href="#" id="">forgot password</a>
                </div>
      </form>
    
        </Modal>

      <li  onClick={this.openModal}><span className="glyphicon glyphicon-user"></span>Sign Up</li>
      <li onClick={this.openModal}><span className="glyphicon glyphicon-log-in"></span> Login</li>
        </ul>
        </div>
        </nav>
        </header>

          
      )

    } else {
      return (
        <header>
          <nav className="navbar navbar-default navbar-main navbar-fixed-top lightHeader" role="navigation">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <Link to="/" className="navbar-brand"></Link>
              </div>
              <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li className="dropdown singleDrop">
                    <Link className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{this.state.username}</Link>
                    <ul className="dropdown-menu dropdown-menu-left">
                      <li><Link to="/Profile">Profile</Link></li>
                      <li><Link to="/Dashboard">Dashboard</Link></li>
                      <li><Link to="/Wishlist">Wishlist</Link></li>
                      <li><Link onClick={this.logout}>Logout</Link></li>
                    </ul>
                  </li>
                  <li className="active dropdown singleDrop">
                    <Link to={"/CreateActivity/" + 1}>Create Activity</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      )
    }

  }
}
export default Nav 

