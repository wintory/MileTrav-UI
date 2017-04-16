import React from 'react'
import { host } from './host'
import 'whatwg-fetch'
class Comment extends React.Component {


  render() {


    return (
                
                <div>
                    <form action="#" method="post" className="form-horizontal" id="commentForm" role="form"> 
                        <div className="form-group">
                            <p for="email" className="col-sm-2 control-label">Comment</p>
                            <div className="col-sm-10">
                              <textarea className="form-control" name="addComment" id="addComment" rows="5"></textarea>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">                    
                                <button className="btn btn-success btn-circle text-uppercase" type="submit" id="submitComment"><span className="glyphicon glyphicon-send"></span> Summit comment</button>
                            </div>
                        </div>            
                    </form>
                </div>
    )
  }
}
export default Comment
