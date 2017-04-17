import React from 'react'
import { Link } from 'react-router'

class AnalyticVerifyCard extends React.Component {

    render() {

        return (


            <tr>
                <td>
                    <img src="https://cdn3.iconfinder.com/data/icons/toolbar-signs/512/verify-512.png" style={{ height: 25, width: 25 }} alt="" />

                </td>
                <td>
                    <img src="http://vignette2.wikia.nocookie.net/spongebob/images/4/43/X_icon.png/revision/latest?cb=20121121054600" style={{ height: 25, width: 25 }} alt="" />
                </td>
                <td>
                    <img src="http://bootdey.com/img/Content/user_1.jpg" alt="" />
                    <a href="#" className="user-link">Username</a>
                    <p className="user-subhead">Status : Pending</p>
                </td>
                <td className="text-center">
                    <Link to=""> <span className="glyphicon glyphicon-zoom-in" />See Pic </Link>
                </td>

            </tr>


        )
    }
}

export default AnalyticVerifyCard