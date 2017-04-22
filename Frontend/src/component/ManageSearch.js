import React from 'react'
import { Link } from 'react-router'
class ManageSearch extends React.Component {

    render() {

        return (
            <div>
            <div className="col-sm-8">
                <input type="text" className="form-control" placeholder="Search by Username" />
            </div>
            <div className="col-sm-4">
                <button type="button" className="btn btn-block buttonCustomPrimary" >Search User</button>
            </div>
            </div>
        )
    }
}

export default ManageSearch