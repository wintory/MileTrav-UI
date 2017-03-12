import React from 'react'

class Footer extends React.Component{

  render(){
    return(
      <footer>
     <div className="footer clearfix">
       <div className="container">
         <div className="row">
           <div className="col-sm-6 col-xs-12">
             <div className="footerContent">
               <a href="#" className="footer-logo"><img src="/img/logo-white.png" alt="footer-logo"/></a>
               <p></p>
             </div>
           </div>
           <div className="col-sm-6 col-xs-12">
             <div className="footerContent">
               <h5>Contact Us</h5>
               <p>This website is MVP for INT353 at School project of Information Technology. We would like some feedback on us. If you have any suggestiong please send detail to </p>
               <ul className="list-unstyled">
                 <li><i className="fa fa-home" aria-hidden="true"></i>SIT KMUTT</li>
                 <li><i className="fa fa-phone" aria-hidden="true"></i>[+66]97 234 7282</li>
                 <li><i className="fa fa-envelope-o" aria-hidden="true"></i><a href="mailTo:patcharaleelalumplert@gmail.com">patcharaleelalumplert@gmail.com</a></li>
               </ul>
             </div>
           </div>
         </div>
       </div>
     </div>
     <div className="copyRight clearfix">
           <div className="container">
             <div className="row">
               <div className="col-sm-6 col-sm-push-6 col-xs-12">
                 <ul className="list-inline">
                   <li><a href="#">Privacy Policy</a></li>
                   <li><a href="#">About Us</a></li>
                   <li><a href="#">Support</a></li>
                 </ul>
               </div>
               <div className="col-sm-6 col-sm-pull-6 col-xs-12">
                 <div className="copyRightText">
                   <p>Copyright © 2017. All Rights Reserved by <a>MileTrav</a>.</p>
                 </div>
               </div>
             </div>
           </div>
         </div>
   </footer>
    )
  }
}

export default Footer
