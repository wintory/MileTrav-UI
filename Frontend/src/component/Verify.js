import React, { Component } from 'react';
import Home from './Home'
import { browserHistory} from 'react-router'
import 'whatwg-fetch'
import Footer from './Footer'
import CitizenUpload from './CitizenUpload'
import Sidemenu from './Sidemenu'
import BankUpload from './BankUpload'

class Verify extends React.Component{

  render(){

    return(
      <div className="main-wrapper b">
        <Home />
        <section className="margintop">
           <div className="col-sm-3 well slidemenu">
            <Sidemenu />
            </div>
        <div className="b createac" >
          <div className="col-sm-8 well">
          <div className="portlet ">
            <div className="portlet-title">
                <center>
                  <div className="caption font-kademy">
                    <h3>Verify Account</h3>
                  </div>
                </center>
              </div>
               <CitizenUpload />
                <BankUpload />
              
          </div>
        </div>
        </div>
        </section>
        <Footer />

      </div>
    )
  }


}
export default Verify