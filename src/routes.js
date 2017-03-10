import React from 'react'
import { Route , IndexRoute} from 'react-router'
import ActivityDetail from './component/ActivityDetail'
import Page1 from './component/page1'
import Page2 from './component/page2'
import Home from './component/Home'
import ActivityResultByProvince from './component/ActivityResultByProvince'
import Register from './component/Register'
import Login from './component/Login'
import CreateActivity from './component/CreateActivity';
export default (
      <Route>
           <Route path="/" component={Home}> </Route>
           <Route path="/to/:province" component={ActivityResultByProvince} ></Route>
           <Route path="/activity/:activity_name" component={ActivityDetail}></Route>
           <Route path="/register" component={Register}></Route>
           <Route path="/login" component={Login}></Route>
           <Route path="/CreateActivity/:step" component={CreateActivity}></Route>
      </Route>
)
