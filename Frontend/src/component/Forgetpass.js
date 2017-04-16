import React, { Component } from 'react'
import 'whatwg-fetch';
import Home from './Home'
import Footer from './Footer'
import { host } from './host'
import { browserHistory } from 'react-router'

class Forgetpass extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="main-wrapper b">
        <Home />
        <section>
          <div className="row">
            <div className="col-sm-3"/>
            <div className="col-sm-5 col-md-6 margintop">
              <div className="bgwhite">

                    <form id="signup">
              <button type="button" className="close" aria-label="Close" onClick={this.closeModalLogin}>
                <span aria-hidden="true">&times;</span>
              </button>
              <h2 className="h2login">login</h2>
              <button className="btn btn-facebook"><i className="fa fa-facebook-official" aria-hidden="true"></i><span >Log In with Facebook</span></button>
              <input  placeholder="enter your username" className="input pass" />
              <input type="password" placeholder="enter your password" required="required" className="input pass" />
              <input type="button" value="Sign me in!" className="inputButton" />
              <div className="text-center">
                <Link to="" >create an account</Link> - <Link to="/forgetpass" onClick={this.closeModalLogin}>forgot password</Link>
              </div>
            </form>


              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    )
  }
}
export default Forgetpass
