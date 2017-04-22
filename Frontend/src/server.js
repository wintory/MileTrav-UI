import path from 'path';
import express from 'express';
import exphbs from 'express-handlebars';
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Page1 from './component/page1'
import csshook from 'css-modules-require-hook/preset' // import hook before routes
import * as http from 'http'
import * as https from 'https'
import * as  fs from 'fs'
import router from './router.js'


const app= express();
app.use(express.static('public'))

app.engine('handlebars' , exphbs())
app.set('view engine' , 'handlebars')
app.set('views' , path.join(__dirname , './templete'))
app.use(router)

/*
var options = {
         key: fs.readFileSync(path.join(__dirname , './server.key')),
        cert: fs.readFileSync(path.join(__dirname ,'./miletrav_com.crt'))

}

var servers = https.createServer(options, app).listen(443 , function(){
        console.log('https running on 443');
});
*/

var server = http.createServer(app).listen(3000 , function(){
  console.log("senior project running on port 3000")
})

