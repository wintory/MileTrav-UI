import React from 'react'
import { Link } from 'react-router'
import ManageUserCard from './ManageUserCard'
import ManageSearch from './ManageSearch'
class ManageUser extends React.Component {

    render() {

        return (
            <div className="main-box no-header clearfix well">
                <div className="main-box-body clearfix">
                    <div className="table-responsive">
                        <h4>Manage User</h4>
                        <ManageSearch />
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

                                <ManageUserCard/>
                                <ManageUserCard/>
                                <ManageUserCard />
                            </tbody>
                        </table>
                    </div>
                    <button type="button" className="btn btn-block buttonCustomPrimary" >See more</button>
                </div>
            </div>

        )
    }
}

export default ManageUser