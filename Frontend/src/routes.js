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
import Profile from './component/Profile'

export default (
       <Route>
            <Route path="/" component={PackageHome}> </Route>
            <Route path="/to/:province" component={ActivityResultByProvince} ></Route>
             <Route path="/activity/:activity_name" component={ActivityDetail}></Route>
             <Route path="/register" component={Forgetpass}></Route>
 -           <Route path="/Profile" component={Profile}></Route>
 -           <Route path="/CreateActivity/:step" component={CreateActivity}></Route>
 +           <Route path="/Profile" component={Profile} ></Route>
        </Route>
)
