import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import ActivityDetail from './component/ActivityDetail'
import ActivityResultByProvince from './component/ActivityResultByProvince'
import Forgetpass from './component/Forgetpass'
import PackageHome from './component/PackageHome'
import CreateActivity from './component/CreateActivity';
import EditProfile from './component/EditProfile'
import Booking from './component/Booking'
import EditActivity from './component/EditActivity'

export default (
        <Route>
                <Route path="/" component={PackageHome}> </Route>
                <Route path="/to/:province" component={ActivityResultByProvince} ></Route>
                <Route path="/activity/:activity_name" component={ActivityDetail}></Route>
                <Route path="/forgetpass" component={Forgetpass}></Route>
                <Route path="/EditProfile" component={EditProfile}></Route>
                <Route path="/CreateActivity/:step" component={CreateActivity}></Route>
                <Route path="/Booking" component={Booking}/>
                <Route path="/EditActivity" component={EditActivity}/>

        </Route>
)
