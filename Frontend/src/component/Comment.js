import React from 'react'
import CommentDetail from './CommentDetail'
import AddComment from './AddComment'

class Comment extends React.Component {


  render() {


    return (

      <div className="col-sm-12 events-block events-block-heading">
                   <div className="comment-tabs well">
            <ul className="nav nav-tabs" role="tablist">
                <li className="active"><a href="#comments-logout" role="tab" data-toggle="tab"><p className="reviews text-capitalize">Comments</p></a></li>
                <li><a href="#add-comment" role="tab" data-toggle="tab"><p className="reviews text-capitalize">Add comment</p></a></li>
            </ul>            
            <div className="tab-content">

                <div className="tab-pane active" id="comments-logout"> 
               <CommentDetail name="Hoiza007" commentdetail="สนุกสุดๆไปเลยจ้าเบบี๋" pic="https://firebasestorage.googleapis.com/v0/b/miletrav-4f855.appspot.com/o/profile_cover%2Fadmin_cover.jpg?alt=media&token=c3c21fee-04a7-46ec-b8ab-83b62f331230"/>
               <CommentDetail name="First45100" commentdetail="หาอีกไม่ได้เเล้วนะเนี่ย" pic="http://swis.assumption.ac.th/html_edu/assumption/temp_pic/student_pic/45100.jpg"/>
               </div>


            <div  className="tab-pane" id="add-comment">
               <AddComment/>
               </div>
              
            </div>
        </div>
        </div>
    )
  }
}
export default Comment
