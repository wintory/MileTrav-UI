import React from 'react'
import Loading from 'react-loading'
import { Router, Link, browserHistory } from 'react-router'
import App from './Login'
import ModalLogin from 'react-modal'
import ModalRegister from 'react-modal'

const appElement = document.getElementById('your-app-element');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class Nav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      username: "",
      modalLoginIsOpen: false,
      modalRegisterIsOpen: false,
      password: "",
      name: "",
      surname: "",
      canRegist: true
    }
    this.goToLogin = this.goToLogin.bind(this);
    this.goToRegister = this.goToRegister.bind(this);
    this.openModalRegister = this.openModalRegister.bind(this);
    this.afterOpenModalRegister = this.afterOpenModalRegister.bind(this);
    this.closeModalRegister= this.closeModalRegister.bind(this);
    this.openModalLogin = this.openModalLogin.bind(this);
    this.afterOpenModalLogin = this.afterOpenModalLogin.bind(this);
    this.closeModalLogin = this.closeModalLogin.bind(this);
    this.logout = this.logout.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.setUsername = this.setUsername.bind(this);
    this.login = this.login.bind(this);
    this.setName = this.setName.bind(this);
    this.setSurname = this.setSurname.bind(this);
    this.register = this.register.bind(this);
  }


  setPassword(e) {
    this.setState({
      password: e.target.value
    })
  }
  setUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  setName(e) {
    this.setState({
      name: e.target.value
    });
  }
  setSurname(e) {
    this.setState({
      surname: e.target.value
    });
  }

  register() {
    console.log('sending');

    fetch(host + "api/user/register", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
        name: this.state.name,
        surname: this.state.surname
      })
    }).then((res) => {
      console.log("res.json()");
      return res.json()
    }
      ).then(
      (res) => {
        console.log(res);
        localStorage.setItem("token", res.token);
        localStorage.setItem("username", res.username);
        browserHistory.push('/');
      }
      ).catch((err) => {
        console.log(err)
      })
  }

  login(e) {
    e.preventDefault();
    fetch(host + "api/user/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      })
    }).then((res) => {
      return res.json()
    }).then((res) => {
      localStorage.setItem("token", res.token);
      localStorage.setItem("username", res.username);
      browserHistory.push('/');
    }).catch((err) => {
      console.log(err)
    })
  }

  static contextTypes: {
    router: React.PropTypes.func.isRequired
  }



  goToLogin(){
    this.setState({ modalRegisterIsOpen: false });
    this.setState({ modalLoginIsOpen: true });
  }

  goToRegister(){
    this.setState({ modalLoginIsOpen: false });
    this.setState({ modalRegisterIsOpen: true });
  }

  openModalLogin() {
    this.setState({ modalLoginIsOpen: true });
  }

  afterOpenModalLogin() {
    this.refs.subtitle.style.color = '#f00';
  }

  closeModalLogin() {
    this.setState({ modalLoginIsOpen: false });
  }

   openModalRegister() {
    this.setState({ modalRegisterIsOpen: true });
  }

  afterOpenModalRegister() {
    this.refs.subtitle.style.color = '#f00';
  }

  closeModalRegister() {
    this.setState({ modalRegisterIsOpen: false });
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

                <ModalLogin
                  isOpen={this.state.modalLoginIsOpen}
                  onAfterOpen={this.afterOpenModalLogin}
                  onRequestClose={this.closeModalLogin}
                  style={customStyles}
                  contentLabel="Example Modal"
                >
                  <form id="signup">
                    <h2 className="h2login">login</h2>
                    <button className="btn btn-facebook"><i className="fa fa-facebook-official" aria-hidden="true"></i><span >Log In with Facebook</span></button>
                    <input onChange={this.setUsername} placeholder="enter your username" className="input pass" />
                    <input onChange={this.setPassword} type="password" placeholder="enter your password" required="required" className="input pass" />
                    <input type="button" onClick={this.login} value="Sign me in!" className="inputButton" />
                    <div className="text-center">
                      <Link to="" onClick={this.goToRegister}>create an account</Link> - <Link to="/forgotpass">forgot password</Link>
                    </div>
                  </form>
                </ModalLogin>


                <ModalRegister
                  isOpen={this.state.modalRegisterIsOpen}
                  onAfterOpen={this.afterOpenModalRegister}
                  onRequestClose={this.closeModalRegister}
                  style={customStyles}
                  contentLabel="Example Modal"
                >
                  <form id="signup" method="post" action="/signup">
                    <h2 className="h2login">create an account</h2>
                    <input onChange={this.setUsername} type="text" placeholder="What's your username?" pattern="^[\w]{3,16}$" autofocus="autofocus" required="required" className="input pass" />
                    <input onChange={this.setPassword} type="password" placeholder="Choose a password" required="required" className="input pass" />
                    <input type="password" placeholder="Confirm password" required="required" className="input pass" />
                    <input onChange={this.setName} type="text" placeholder="Name" className="input pass" required="required" />
                    <input onChange={this.setSurname} type="text" placeholder="Surname" className="input pass" required="required" />
                    <input type="submit" onClick={this.register} value="Sign me up!" className="inputButton" />
                    <div className="text-center">
                      <p>already have an account?</p> <Link to="" onClick={this.goToLogin}>login</Link>
                    </div>
                  </form>
                </ModalRegister>

                <li><Link to="" onClick={this.openModalRegister}><span className="glyphicon glyphicon-user"></span>Sign Up</Link></li>
                <li><Link to="" onClick={this.openModalLogin}><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
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

