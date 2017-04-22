
import { Route , IndexRoute , RouterContext , match} from 'react-router'
import routes from './routes'
import { renderToString }  from 'react-dom/server'
import React from 'react'
import Page1 from './component/page1'
import Page2 from './component/page2'

export default function(req, res) {
    console.log(req.url)
    match({
      routes:routes, location:req.url}, (error, redirectLocation, renderProps) => {
        res.render('index.handlebars' , {
            markup: renderToString(<RouterContext {...renderProps} />)
        })
    });
}
