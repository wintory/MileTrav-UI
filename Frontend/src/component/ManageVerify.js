import React from 'react'
import { Link } from 'react-router'
import ManageVerifyCard from './ManageVerifyCard'
import ManageSearch from './ManageSearch'
class ManageVerify extends React.Component {

    render() {

        return (
                    <div className="main-box no-header clearfix well">
                        <div className="main-box-body clearfix">
                            <div className="table-responsive">
                                <h4>Verify User</h4>
                                <ManageSearch/>
                                  <br/>
                                  <br/>
                                  <br/>
                               <table className="table user-list">
                            <thead>
                                <tr>
                                <th></th>
                                <th></th>
                                <th><p>User</p></th>
                                <th className="text-center"><p>Verify</p></th>
                                </tr>
                            </thead>
                            <tbody>

                                <ManageVerifyCard/>
                                  </tbody>                    
                        </table>
                         <button type="button" className="btn btn-block buttonCustomPrimary" >See more</button>
                            </div>
                        </div>
                    </div>

        )
    }
}

export default ManageVerify