import React, { Component } from 'react'
import RecommendCard from './RecommendCard'
import 'whatwg-fetch';
import { host } from './host'
class Recommend extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activity: []
    }
  }

  componentDidMount() {
    fetch(host + 'api/activities/popular', {
      method: 'GET'
    }).then(
      (res) => res.json()
      ).then((res) => {
        this.setState({
          activity: res
        })
      }
      )

  }

  render() {
    return (



      <div className={this.props.outborder}>
        <div className={this.props.inborder}>
          <div className="row">
            <h4>{this.props.topic}</h4>
            <div role="tabpanel" >
              <div role="tabpanel" className="tab-pane active" id="recent">
                {
                  this.state.activity.map((value, index) => {
                    return (
                      <RecommendCard name={value.activity_name} pic={value.cover_photo} key={index} province={value.province} />
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
export default Recommend
