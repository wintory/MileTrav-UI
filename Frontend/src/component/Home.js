import React from 'react'
import Nav from './Nav'
import Header from './Header'
import Search from './Search'
import PackageHome from './PackageHome'
import Footer from './Footer'
import Modal from 'react-modal'

class Home extends React.Component{
  constructor(props){
    super(props);

  }
  
  render(){
    return(
        <div className="main-wrapper b">
          <Nav/>
          <div>    </div>
          <Header/>
          <Search header="Your Activities" minheader="choose"/>

        </div>


    )
  }
}

export default Home
