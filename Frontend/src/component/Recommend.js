import React,{Component} from 'react'
import RecommendCard from './RecommendCard'
class Recommend extends React.Component{


    render(){
      return(
            
        

      <div className="col-sm-12 well ">
              <h4>{this.props.topic}</h4>
            <div role="tabpanel" >   
              <div className="tab-content ">
                <div role="tabpanel" className="tab-pane active" id="recent">
                <RecommendCard/>
                <RecommendCard/>
                <RecommendCard/>
                <RecommendCard/>
                </div>
              </div>
            </div>
          </div>

      )
    }
}
export default Recommend
