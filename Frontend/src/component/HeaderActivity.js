import React from 'react'
import { host } from './host'
import 'whatwg-fetch'
class HeaderActivity extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      url: []
    }
  }


  componentDidMount() {
    fetch(host + 'api/cover/' + this.props.activity, {
      method: 'GET'
    }).then((res) => {
      return res.json()
    }).then((res) => {
      console.log(res)
      this.setState({
        url: res
      })
    })
  }

  render() {


    return (

      <div className="col-sm-12">
        {
          this.state.url.map((value, index) => {
            return (

              <div id="myCarousel" className=" carousel" data-ride="carousel">

                <div key={index} className="carousel-inner" role="listbox">
                  <div className="item active ">
                    <img src={value.cover_photo}  />
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
          })

        }
        </div>
    )
  }
}
export default HeaderActivity
