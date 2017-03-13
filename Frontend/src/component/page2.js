import React from 'react'
import Loading from 'react-loading'
import Nav from './Nav'
import Footer from './Footer'
import {Link} from 'react-router'
class Page2 extends React.Component{
  render(){
    return(
      <div className="main-wrapper">
          <Nav />
          <section className="mainContentSection singlePackage">
             <center>
                   <div className="container" style={{marginTop : 300 , marginBottom: 300}}>
                         <Loading type='bars' color="#26A65B" style={{width: 200 , height: 100}}/>
                   </div>
             </center>
          </section>
          <Footer />
     </div>
    )
  }

}

export default Page2
