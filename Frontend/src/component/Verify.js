import React from 'react'
import Home from './Home'
import { browserHistory} from 'react-router'
import 'whatwg-fetch'
import Footer from './Footer'
import DropzoneComponent from 'react-dropzone-component/lib/react-dropzone';
import {host} from './host'
import firebase from 'firebase'

class EditProfile extends React.Component{

          constructor(props){
            super(props)
            this.state ={
              cover_photo : "",
              cover : null,
              type_file : "",
            }
            this.fetchData = this.fetchData.bind(this)
          }



          componentDidMount(){
            if (localStorage.getItem("username") == null || localStorage.getItem("token") == null) {
                browserHistory.replace("/login")
            }else{
              var config = {
                  apiKey: "AIzaSyDu0FY6mCxbAek2ZWq-z8WcQvnR0IZJO4Q",
                  authDomain: "miletrav-4f855.firebaseapp.com",
                  databaseURL: "https://miletrav-4f855.firebaseio.com",
                  storageBucket: "miletrav-4f855.appspot.com",
                  messagingSenderId: "469316737513"
                };
              firebase.initializeApp(config);
              fetch(host+'api/profile/'+localStorage.getItem('username') , {
                method: 'GET',
                 headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer '+localStorage.getItem('token')
                 }
              }).then((res)=>{
                return res.json()
              }).then((res)=>{
                  var x = res
                  x.map((value) =>{
                      this.setState({
                        cover_photo : value.cover_photo == null ? "": value.cover_photo,
                        cover : null,
                        type_file : "",
                      })
                  })
              })
            }

          }

          fetchData(){
            fetch(host+'api/profile/'+localStorage.getItem('username') , {
              method: 'GET',
               headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
                  'Authorization': 'Bearer '+localStorage.getItem('token')
               }
            }).then((res)=>{
              return res.json()
            }).then((res)=>{
                var x = res
                x.map((value) =>{
                    this.setState({
                     verify_photo : value.cover_photo == null ? "": value.cover_photo,
                      cover : null,
                      type_file : "",                  
                    })
                })
            })
          }



  render(){


    var componentConfig = {
        iconFiletypes: ['.jpg', '.png'],
        showFiletypeIcon: true,
        postUrl: 'no-url',
    };
    var djsConfig = { autoProcessQueue: false,    addRemoveLinks: true,  uploadMultiple: false , maxFiles: 1
    }
    var eventHandlers = {
    addedfile: (file) => {
        var  type = file.name.split('.');
        console.log(type[1])
        this.setState({
          cover : file,
          type_file : type[1]
        })
      }
    }

    return(
      <div className="main-wrapper b">
        <Home />
        <section className="mainContentSection singlePackage b">
        <div className="container b" >
          <div className="col-sm-12 col-xs-12 ">
          <div className="portlet light well">
            <div className="portlet-title">
                <center>
                  <div className="caption font-kademy">
                    <h3>Verify Account</h3>
                  </div>
                </center>
              </div>
              <div className="portlet-body">
              <form className="form-horizontal">
              <div className="form-group">
                <p className="control-label col-sm-2 actopic">ID Card Photo</p>
                <div className="col-sm-10">
                <DropzoneComponent style={{width: 100 , height : 25}} config={componentConfig}
                    eventHandlers={eventHandlers}
                    djsConfig={djsConfig} />
                  </div>
              </div>
                    <div className="form-group">
                       <div className="col-sm-2"/>    
                       <div className="col-sm-2"/>
                        <div className="col-sm-1"/>
                      <div className="col-sm-2">
                        <button type="button" className="btn btn-block buttonCustomPrimary" onClick={this.update}>Verify</button>
                      </div>
                    </div>
              </form>
              </div>
          </div>
        </div>
        </div>
        </section>
        <Footer />

      </div>
    )
  }


}
export default EditProfile
