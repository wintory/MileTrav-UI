import React from 'react'
import { host } from './host'
import 'whatwg-fetch'
class Comment extends React.Component {


  render() {


    return (
                <div>                
                    <ul className="media-list">
                      <li className="media">
                        <a className="pull-left" href="#">
                          <img className="media-object img-circle" src={this.props.pic} alt="profile"/>
                        </a>
                        <div className="media-body">
                          <div className="well well-lg">
                              <h4 className="media-heading text-uppercase reviews">{this.props.name}</h4>
                              <ul className="media-date text-uppercase reviews list-inline">
                                <li className="dd">8</li>
                                <li className="mm">04</li>
                                <li className="aaaa">2017</li>
                              </ul>
                              <p className="media-comment">
                                {this.props.commentdetail}
                              </p>                           
                          </div>              
                        </div>
                      </li>          
                    </ul> 
                </div>
    )
  }
}
export default Comment
