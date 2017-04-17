import React from 'react'
import { Link } from 'react-router'

class AnalyticActivityCard extends React.Component {

    render() {

        return (

            <tr>
                <td>
                    <img src="http://bootdey.com/img/Content/user_1.jpg" alt="" />
                    <Link to="/ActivityDetail" className="user-link">ActivityName</Link>
                    <p className="user-subhead">Create by : AAA</p>
                </td>
                <td className="text-center">
                    <Link to=""><p className="red">Delete Activity</p></Link>
                </td>

            </tr>


        )
    }
}

export default AnalyticActivityCard 