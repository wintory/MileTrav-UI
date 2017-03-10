import React from 'react'
import {Link} from 'react-router'
class NavBar extends React.Component{

  render(){
    return(
      <header>
     <nav className="navbar navbar-default navbar-main navbar-fixed-top" role="navigation">
       <div className="container">
         <div className="navbar-header">
           <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
             <span className="sr-only">Toggle navigation</span>
             <span className="icon-bar"></span>
             <span className="icon-bar"></span>
             <span className="icon-bar"></span>
           </button>
           <Link to="/" className="navbar-brand"></Link>
         </div>
         <div className="collapse navbar-collapse navbar-ex1-collapse">
           <ul className="nav navbar-nav navbar-right">
              <li className="active dropdown singleDrop">
                  <Link to="/register">REGISTER</Link>
              </li>
              <li className="active dropdown singleDrop">
                  <Link to="/login">LOGIN</Link>
              </li>
           </ul>
         </div>
       </div>
     </nav>
     </header>
    )
  }
}
export default NavBar
