import React,{Component} from 'react'
import RecommendCard from './RecommendCard'
class Recommend extends React.Component{


    render(){
      return(
            

         <div className=" row">
          <div className="margintop col-sm-6 well">
              <h4>Activity You May know</h4>
            <div role="tabpanel" >   
              <div className="tab-content">
                <div role="tabpanel" className="tab-pane active" id="recent">
                <RecommendCard/>
                <RecommendCard/>
                <RecommendCard/>
                </div>
              </div>
            </div>
          </div>
          </div>
      )
    }
}
export default Recommend
