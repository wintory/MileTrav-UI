import React, { props } from 'react'
import Home from './Home'
import Recommend from './Recommend'
import CardActivityDetailRight from './CardActivityDetailRight'
import CardActivityDetailLeft from './CardActivityDetailLeft'
import HeaderActivity from './HeaderActivity'
import Footer from './Footer'
import Comment from './Comment'
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
            <div className="col-sm-7 margintop">
              <div >       
               <HeaderActivity activity={this.state.name} />  
                <CardActivityDetailLeft activity={this.state.name} />
                  <Comment/>
              </div>
            </div>
            <div className="row">
            <div className="col-sm-5 margintop">
              <div >         
            <CardActivityDetailRight activity={this.state.name} />
            <Recommend topic="Activity You May Know" outborder="col-sm-12 " inborder="well"/>
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
export default ActivityDetail
