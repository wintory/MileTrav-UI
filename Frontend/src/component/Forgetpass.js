import React, { Component } from 'react'
import Home from './Home'
import Footer from './Footer'

class Forgetpass extends Component {


  render() {
    return (
       <div className="main-wrapper b">
          <Home />
          <section className="mainContentSection singlePackage b">
            <div className="container b createac">
              <div className="col-sm-12 col-xs-12">
                <div className="portlet light well">
                  <div className="portlet-title">
                    <center>
                      <div className="caption font-kademy">
                        <br />
                        <h3>Forgot Password</h3>
                      </div>
                    </center>
                  </div>
                  <div className="portlet-body">
                    <div className="row">
                      <br />
                      <br />
                      <center>
                        <div className="col-md-12">
                          <form className="form-horizontal">
                            <div className="form-group">
                              <p className="control-label col-sm-2 actopic">User Name </p>
                              <div className="col-sm-9">
                                <input type="text" className="form-control"  placeholder="User Name " />
                              </div>
                            </div>

                            <div className="form-group">
                              <p className="control-label col-sm-2 actopic">Email </p>
                              <div className="col-sm-9">
                                <input type="text" className="form-control"  placeholder="Email " />
                              </div>
                            </div>
                           <br/>
                            <div className="col-sm-3" />
                            <div className="col-sm-1" />
                            <div className="form-group">
                              <div className="col-sm-4">
                                <button type="button" className="btn btn-block buttonCustomPrimary" >Forgot Password</button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </center>
                    </div>
                  </div>
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
