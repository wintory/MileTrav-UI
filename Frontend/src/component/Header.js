import React from 'react'

class Header extends React.Component{
    render(){
      const divStyle = {
          backgroundImage: 'url(' + '/img/cover/home.jpg' + ')',
      };
      return(
        <section className="pageTitle" style={divStyle}>
           <div className="container">
             <div className="row">
               <div className="col-xs-12">
                 <div className="titleTable">
                   <div className="titleTableInner">
                     <div className="pageTitleInfo">
                       <h1>Where ever you go is a part of you somehow</h1>
                       <div className="under-border"></div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
     </section>
      )
    }
}
export default Header
