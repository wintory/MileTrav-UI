import React, { props } from 'react'
import Home from './Home'
import Recommend from './Recommend'
import CardActivityDetail from './CardActivityDetail'
import HeaderActivity from './HeaderActivity'
import Footer from './Footer'
class ActivityDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.params.activity_name
    };
  }
  render() {
    return (

      <div className="main-wrapper b">
        <Home />
        <section>
          <div className="row">
            <div className="col-sm-6 margintop">
              <div >
                <CardActivityDetail activity={this.state.name} />
              </div>
            </div>
            <HeaderActivity activity={this.state.name} />

            <Recommend />
          </div>

        </section>
        <Footer />
      </div>


    )
  }
}
export default ActivityDetail
