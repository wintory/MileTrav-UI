import React from 'react'
import ReactDOM from 'react-dom'
import { Router , Route, browserHistory} from 'react-router'
import routes from './routes';
import Page1 from './component/page1'
import Page2 from './component/page2'
ReactDOM.render(
    <Router routes={routes} history={browserHistory} />,
    document.getElementById('root')
);
