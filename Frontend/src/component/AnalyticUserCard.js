import React from 'react'
import { Link } from 'react-router'

class AnalyticUserCard extends React.Component {

    render() {

        return (

            <tr>
                <td>
                    <img src="http://bootdey.com/img/Content/user_1.jpg" alt="" />
                    <a href="#" className="user-link">Username</a>
                    <p className="user-subhead">Status : Active</p>
                </td>
                <td className="text-center">
                    <Link to=""><p className="red">Ban User</p></Link>
                </td>

            </tr>


        )
    }
}

export default AnalyticUserCard