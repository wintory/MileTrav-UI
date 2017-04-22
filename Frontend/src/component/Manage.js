import React from 'react'
import { Link } from 'react-router'
import Home from './home'
import Footer from './footer'
import ManageUser from './ManageUser'
import ManageVerify from './ManageVerify'
import ManageActivity from './ManageActivity'

class Manage extends React.Component {


    render() {
        return (
            <div className="main-wrapper b">
                <Home />
                <section>
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 content-block masonry-brick margintop">
                            <div className="bgwhite">
                                <ManageActivity />
                            </div>
                        </div>


                        <div className="col-sm-6 col-xs-12 margintop">
                            <div className="bgwhite">
                                <ManageVerify />
                            </div>
                            <div className="bgwhite">
                                <ManageUser />
                            </div>
                        </div>




                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}
export default Manage
