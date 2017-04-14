import React from 'react'
import { Router,Route , IndexRoute , browserHistory} from 'react-router'
import ActivityDetail from './component/ActivityDetail'
import Page1 from './component/page1'
import Page2 from './component/page2'
import Home from './component/Home'
import ActivityResultByProvince from './component/ActivityResultByProvince'
import Forgetpass from './component/Forgetpass'
import PackageHome from './component/PackageHome'
import CreateActivity from './component/CreateActivity';
import EditProfile from './component/EditProfile'

export default (
       <Route>
            <Route path="/" component={PackageHome}> </Route>
            <Route path="/to/:province" component={ActivityResultByProvince} ></Route>
             <Route path="/activity/:activity_name" component={ActivityDetail}></Route>
             <Route path="/forgetpass" component={Forgetpass}></Route>
 -           <Route path="/EditProfile" component={EditProfile}></Route>
 -           <Route path="/CreateActivity/:step" component={CreateActivity}></Route>

        </Route>
)
