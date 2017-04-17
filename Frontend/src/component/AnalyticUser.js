import React from 'react'
import { Link } from 'react-router'
import AnalyticUserCard from './AnalyticUserCard'
import AnalyticSearch from './AnalyticSearch'
class AnalyticUser extends React.Component {

    render() {

        return (
            <div className="main-box no-header clearfix well">
                <div className="main-box-body clearfix">
                    <div className="table-responsive">
                        <h4>Manage User</h4>
                        <AnalyticSearch />
                        <br />
                        <br />
                        <br />
                        <table className="table user-list">
                            <thead>
                                <tr>
                                    <th><p>User</p></th>
                                </tr>
                            </thead>
                            <tbody>

                                <AnalyticUserCard/>
                                <AnalyticUserCard/>
                                <AnalyticUserCard />
                            </tbody>
                        </table>
                    </div>
                    <button type="button" className="btn btn-block buttonCustomPrimary" >See more</button>
                </div>
            </div>

        )
    }
}

export default AnalyticUser