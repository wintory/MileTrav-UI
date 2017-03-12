import React from 'react'
import {Link} from 'react-router'
class Page2 extends React.Component{
  render(){
    return(
      <div>
      <h1>This is Page 2</h1>
      <Link to="/">go page 1</Link>
      </div>
    )
  }

}

export default Page2
