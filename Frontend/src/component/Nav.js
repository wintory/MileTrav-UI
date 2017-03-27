import React from 'react'
import Loading from 'react-loading'
import { Router, Link, browserHistory } from 'react-router'
class Nav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      username: ""
    }
    this.logout = this.logout.bind(this);
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
    if ((!this.state.isLogin) || this.state.username == "") {
      return (

        <header className="btm">
         <nav className="navbar">
  <div className="container-fluid nav">
    <div className="navbar-header">
      <Link to="/" className="navbar-brand"></Link>
    </div>
    <ul className="nav navbar-nav navbar-right">
      <li><Link to="/register"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
      <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
        </ul>
        </div>
        </nav>
        </header>
      )

    } else {
      return (
        <header>
          <nav classNameName="navbar navbar-default navbar-main navbar-fixed-top lightHeader" role="navigation">
            <div classNameName="container">
              <div classNameName="navbar-header">
                <button type="button" classNameName="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                  <span classNameName="sr-only">Toggle navigation</span>
                  <span classNameName="icon-bar"></span>
                  <span classNameName="icon-bar"></span>
                  <span classNameName="icon-bar"></span>
                </button>
                <Link to="/" classNameName="navbar-brand"></Link>
              </div>
              <div classNameName="collapse navbar-collapse navbar-ex1-collapse">
                <ul classNameName="nav navbar-nav navbar-right">
                  <li classNameName="dropdown singleDrop">
                    <Link classNameName="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{this.state.username}</Link>
                    <ul classNameName="dropdown-menu dropdown-menu-left">
                      <li><Link to="/Profile">Profile</Link></li>
                      <li><Link to="/Dashboard">Dashboard</Link></li>
                      <li><Link to="/Wishlist">Wishlist</Link></li>
                      <li><Link onClick={this.logout}>Logout</Link></li>
                    </ul>
                  </li>
                  <li classNameName="active dropdown singleDrop">
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
