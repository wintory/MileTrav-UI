import React from 'react'
import {Router , Link , browserHistory} from 'react-router'
class Nav extends React.Component{

      constructor(props){
        super(props);
        this.state = {
          isLogin: false,
          username : ""
        }
        this.logout = this.logout.bind(this);
      }


  componentDidMount(){
    console.log(localStorage.getItem("token"));
    if(localStorage.getItem("token") == null || localStorage.getItem("token") === "undefined"){
      this.setState({
          isLogin: false
      })
    }else{
      this.setState({
          isLogin: true,
          username : localStorage.getItem('username')
      })
    }
  }

  logout(e){
    e.preventDefault();
    console.log("remove token");
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    browserHistory.replace('/');
  }


  render(){
 if(!this.state.isLogin || this.state.username == ""){
      return(
        <header>
       <nav className="navbar navbar-default navbar-main navbar-fixed-top lightHeader" role="navigation">
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

    }else{
      return(
        <header>
        <nav className="navbar navbar-default navbar-main navbar-fixed-top lightHeader" role="navigation">
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
             <li className="dropdown singleDrop">
                <Link className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{this.state.username}</Link>
                <ul className="dropdown-menu dropdown-menu-left">
                  <li><Link to="/Profile">Profile</Link></li>
                  <li><Link to="/Dashboard">Dashboard</Link></li>
                  <li><Link to="/Wishlist">Wishlist</Link></li>
                  <li><Link onClick={this.logout}>Logout</Link></li>
                </ul>
              </li>
             <li className="active dropdown singleDrop">
                 <Link to={"/CreateActivity/"+1}>Create Activity</Link>
             </li>
             </ul>
           </div>
         </div>
        </nav>
        </header>
      )
    }

  }
}
export default Nav
