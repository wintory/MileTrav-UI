import React from 'react'
import { Link } from 'react-router'
import { host } from './host'
import Home from './home'
import Footer from './footer'

class WishList extends React.Component {

  render() {

    $(document).ready(function () {

      $('.star').on('click', function () {
        $(this).toggleclassName('star-checked');
      });

      $('.ckbox label').on('click', function () {
        $(this).parents('tr').toggleclassName('selected');
      });

      $('.btn-filter').on('click', function () {
        var $target = $(this).data('target');
        if ($target != 'all') {
          $('.table tr').css('display', 'none');
          $('.table tr[data-status="' + $target + '"]').fadeIn('slow');
        } else {
          $('.table tr').css('display', 'none').fadeIn('slow');
        }
      });

    });

    return (
      <div className="main-wrapper b">
        <Home />
        <section className="content">
          <div className="col-sm-6 col-md-offset-2 margintop">
            <div className="panel panel-default">
              <div className="panel-body">
                <div className="pull-right">
                  <div className="btn-group">
                  </div>
                </div>
                <div className="table-container">
                  <table className="table table-filter">
                    <tbody>
                      <tr data-status="pagado">
                        <td>
                          <div className="ckbox">
                            <input type="checkbox" id="checkbox1" />
                            <label for="checkbox1"></label>
                          </div>
                        </td>
                        <td>
                          <a href="javascript:;" className="star">
                            <i className="glyphicon glyphicon-star"></i>
                          </a>
                        </td>
                        <td>
                          <div className="media">
                            <a href="#" className="pull-left">
                              <img src="https://s3.amazonaws.com/uifaces/faces/twitter/fffabs/128.jpg" className="media-photo" />
                            </a>
                            <div className="media-body">
                              <h4 className="title">
                                SIT First Step
                              </h4>
                              <p className="summary">Location : KMUTT</p>
                            </div>
                          </div>
                        </td>
                      </tr>
                   
                  
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
        
          </div>

        </section>
        <Footer />
      </div>
    )
  }
}
export default WishList