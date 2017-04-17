import React from 'react'
import { Link } from 'react-router'
import Home from './home'
import Footer from './footer'
import AnalyticUser from './AnalyticUser'
import AnalyticVerify from './AnalyticVerify'
import AnalyticActivity from './AnalyticActivity'

class Analytic extends React.Component {


    render() {
        return (
            <div className="main-wrapper b">
                <Home />
                <section>
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 content-block masonry-brick margintop">
                            <div className="bgwhite">
                                <AnalyticActivity />
                            </div>
                        </div>


                        <div className="col-sm-6 col-xs-12 margintop">
                            <div className="bgwhite">
                                <AnalyticVerify />
                            </div>
                            <div className="bgwhite">
                                <AnalyticUser />
                            </div>
                        </div>




                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}
export default Analytic
