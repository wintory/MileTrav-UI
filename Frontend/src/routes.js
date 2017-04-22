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
import Verify from './component/Verify'
import WishList from './component/WishList'
import Manage from './component/Manage'
import UploadPhotoActivity from './component/UploadPhotoActivity'
import Setting from './component/Setting'

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
                <Route path="/Verify" component={Verify}/>
                <Route path="/WishList" component={WishList}/>
                <Route path="/Manage" component={Manage}/>
                <Route path="/Setting" component={Setting} ></Route>
                <Route path="/UploadPhotoActivity/:activity_name" component={UploadPhotoActivity}></Route>
        </Route>
)
