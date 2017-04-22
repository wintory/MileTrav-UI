import React from 'react'
import { Link } from 'react-router'
import ManageActivityCard from './ManageActivityCard'
import ManageSearchActivity from './ManageSearchActivity'
class ManageActivity extends React.Component {

    render() {

        return (
            <div className="main-box no-header clearfix well">
                <div className="main-box-body clearfix">
                    <div className="table-responsive">
                        <h4>Manage User</h4>
                        <ManageSearchActivity />
                        <br />
                        <br />
                        <br />
                        <table className="table user-list">
                            <thead>
                                <tr>
                                    <th><p>Activity</p></th>
                                </tr>
                            </thead>
                            <tbody>
                                <ManageActivityCard/>
                                <ManageActivityCard/>
                                <ManageActivityCard/>
                                <ManageActivityCard/>
                                <ManageActivityCard/>
                                <ManageActivityCard/>
                                <ManageActivityCard/>
                                <ManageActivityCard />
                            </tbody>
                        </table>
                    </div>
                    <button type="button" className="btn btn-block buttonCustomPrimary" >See more</button>
                </div>
            </div>

        )
    }
}

export default ManageActivity