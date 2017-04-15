import React , {props} from 'react'
import Nav from './Nav'
import CardActivityDetail from './CardActivityDetail'
import HeaderActivity from './HeaderActivity'
import Footer from './Footer'
class ActivityDetail extends React.Component{
  constructor(props){
    super(props)
    this.state = {
         name : this.props.params.activity_name
       };
  }
  render(){
      return(

         <div className="main-wrapper b">
      <Nav/>
<section>
   <div className="row">
     <HeaderActivity activity={this.state.name}/>
     <div className="col-sm-5 col-md-6 margintop">
       <div >
       <CardActivityDetail activity={this.state.name}/>
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
