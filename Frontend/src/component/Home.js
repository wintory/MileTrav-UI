import React from 'react'
import Nav from './Nav'
import Header from './Header'
import Search from './Search'
import PackageHome from './PackageHome'
import Footer from './Footer'
class Home extends React.Component{
  constructor(props){
    super(props);
  }

  
  render(){
    return(
        <div className="main-wrapper">

          <Nav/>
          <Header/>
          <Search/>
          <PackageHome />
          <Footer />
        </div>


    )
  }
}

export default Home
