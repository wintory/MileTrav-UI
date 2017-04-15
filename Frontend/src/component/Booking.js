import React from 'react'
import Tickets from './Tickets'
import Home from './Home'
import Footer from './Footer'
import Search from './Search'
class Booking extends React.Component {


  render() {
    return (

      <div className="main-wrapper b">
        <Home />
         <section className="mainContentSection singlePackage b">
      <div className="container component">
        <div className="row">
          <div className="col-sm-4 col-sm-push-8 col-xs-12 well">
            <aside>
              <div className="infoTitle">
                <h4>Booking Details</h4>
              </div>
              <div className="bookDetailsInfo">
                <img src="img/booking/booking.png" alt="image"/>
                <div className="infoArea">
                  <h3>Activity Name : AAA</h3>
                  <ul className="list-unstyled">
                    <li><i className="fa fa-calendar" aria-hidden="true"></i>Location :  <span>AAA</span></li>
                    <li><i className="fa fa-calendar" aria-hidden="true"></i>Tickets :  แถวกลาง <span>1</span></li>
                    <li><i className="fa fa-calendar" aria-hidden="true"></i>Tickets :  แถวหน้า <span>1</span></li>
                  </ul>
                  <div className="priceTotal">
                    <h2>Total: <span>6,500 Baht</span></h2>
                  </div>
                </div>
              </div>
            </aside>
          </div>
          <div className="col-sm-7 col-sm-pull-4 col-xs-12 well">
            <div className="infoTitle">
              <h4>billing address</h4>
            </div>
            <div >
              <form action="" method="POST" role="form" className="form">
                <div className="row">
                  <div className="form-group col-sm-6 col-xs-12">
                    <p className="control-label col-sm-5 paytopic" >First Name</p>
                      <input type="text" className="form-control" placeholder="input First Name" />
                  </div>
                  <div className="form-group col-sm-6 col-xs-12">
                    <p className="control-label col-sm-5 paytopic" for="">Last Name</p>
                    <input type="text" className="form-control" id="" placeholder="input Last Name"/>
                  </div>
                  <div className="form-group col-sm-6 col-xs-12">
                    <p className="control-label col-sm-5 paytopic" for="">Phone</p>
                    <input type="text" className="form-control" id="" placeholder="input Your Phone"/>
                  </div>

                  <div className="col-xs-12 margintop">
                    <div className="infoTitle">
                      <h4>card info</h4>
                    </div>
                  </div>
                  <div className="form-group col-sm-6 col-xs-12">
                    <p className="control-label col-sm-5 paytopic" for="">Card Name</p>
                    <input type="text" className="form-control" id="" placeholder="input Your Card Name"/>
                  </div>
                  <div className="form-group col-sm-6 col-xs-12">
                    <p className="control-label col-sm-5 paytopic" for="">Card Number</p>
                    <input type="text" className="form-control" id="" placeholder="input Your Card Number"/>
                  </div>
                  <div className="form-group col-sm-6 col-xs-12">
                    <p className="control-label col-sm-5 paytopic" for="">CVV</p>
                    <input type="text" className="form-control" id="" placeholder="input Your Card CVV"/>
                  </div>
                   <div className="form-group col-sm-6 col-xs-12">
                    <p className="control-label col-sm-6 paytopic" for="">Expiration Date</p>
                    <input type="text" className="form-control" id="" placeholder="input Your Expiration Date"/>
                  </div>
                  <div className="form-group col-sm-6 col-xs-12">
                    <p className="control-label col-sm-5 paytopic" for="" className="blankLabel"></p>
                    <ul className="list-inline">
                      <li><a href="#"><img src="img/booking/master-card.png" alt="image"/></a></li>
                      <li><a href="#"><img src="img/booking/omise.png" style={{width:66,height:45}}alt="image"/></a></li>
                      <li><a href="#"><img src="img/booking/visa.png" alt="image"/></a></li>
                      <li><a href="#"><img src="img/booking/paypal.png" alt="image"/></a></li>
                    </ul>
                  </div>
                      <div className="col-sm-1"/>
                      <div className="col-sm-4 margintop">
                        <button type="button" className="btn btn-block buttonCustomPrimary" onClick={this.update}>Book It Now!</button>
                      </div>
                </div>
              </form>   
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
export default Booking
