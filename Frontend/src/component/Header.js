import React from 'react'

class Header extends React.Component{
    render(){
      const divStyle = {
          backgroundImage: 'url(' + '/img/cover/home.jpg' + ')',
      };
      return(
        <div id="myCarousel" className="carousel slide slideshow component" data-ride="carousel">

    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
      <li data-target="#myCarousel" data-slide-to="3"></li>
    </ol>

    <div className="carousel-inner" role="listbox">
      <div className="item active">
        <img src="http://www.thailandoutlook.tv/wp-content/uploads/2016/09/shutterstock-bangkok-thailand.jpg" alt="Chania" width="460" height="345"/>
      </div>

      <div className="item">
        <img src="http://www.thailandoutlook.tv/wp-content/uploads/2016/09/shutterstock-bangkok-thailand.jpg" alt="Chania" width="460" height="345"/>
      </div>
    
      <div className="item">
        <img src="img_flower.jpg" alt="Flower" width="460" height="345"/>
      </div>

      <div className="item">
        <img src="img_flower2.jpg" alt="Flower" width="460" height="345"/>
      </div>
    </div>


    <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>


      )
    }
}
export default Header
