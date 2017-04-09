import React from 'react'


class Header extends React.Component{
    render(){
      const divStyle = {
          backgroundImage: 'url(' + '/img/cover/home.jpg' + ')',
      };
      return(
        <div id="myCarousel" className="carousel slide slideshow component header" data-ride="carousel">

    <div className="carousel-inner" role="listbox">
      <div className="item active">
        <img src="https://p-u.popcdn.net/hero_images/desktop_images/000/000/063/medium/89cec92df97787b6a47fcfbbf2ed6696c0786293.jpg?1487047329" alt="Chania" />
      </div>

      <div className="item">
        <img src="https://p-u.popcdn.net/hero_images/desktop_images/000/000/072/medium/34373f91167ec53f77de9cbe252b3b2cc2f4a71e.jpg?1489659703" alt="Chania" />
      </div>
    
      <div className="item">
        <img src="https://p-u.popcdn.net/hero_images/desktop_images/000/000/071/medium/6ae85e116963146930888881aab9766ef63145e5.png?1489388513" alt="Flower" />
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