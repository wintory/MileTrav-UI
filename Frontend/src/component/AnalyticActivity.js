import React from 'react'
import { Link } from 'react-router'
import AnalyticActivityCard from './AnalyticActivityCard'
import AnalyticSearchActivity from './AnalyticSearchActivity'
class AnalyticActivity extends React.Component {

    render() {

        return (
            <div className="main-box no-header clearfix well">
                <div className="main-box-body clearfix">
                    <div className="table-responsive">
                        <h4>Manage User</h4>
                        <AnalyticSearchActivity />
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
                                <AnalyticActivityCard/>
                                <AnalyticActivityCard/>
                                <AnalyticActivityCard/>
                                <AnalyticActivityCard/>
                                <AnalyticActivityCard/>
                                <AnalyticActivityCard/>
                                <AnalyticActivityCard/>
                                <AnalyticActivityCard />
                            </tbody>
                        </table>
                    </div>
                    <button type="button" className="btn btn-block buttonCustomPrimary" >See more</button>
                </div>
            </div>

        )
    }
}

export default AnalyticActivity