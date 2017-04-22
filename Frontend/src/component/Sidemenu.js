import React from 'react'
import {Link} from 'react-router'
class Sidemenu extends React.Component{
    render(){
        return(
          

                        <div className="row">
                             <div className="col-sm-12">
                                 <div className="list-group" style={{marginTop: 10}}>
                                    <Link to="/EditProfile" className="list-group-item">Profile</Link>
                                    <Link to="/Verify" className="list-group-item">Verification</Link>
                                    <Link to="/Setting" className="list-group-item">Setting</Link>
                                 </div>
                             </div>
                        </div>  
    
   
        )
    }
}
export default Sidemenu;