import React from 'react'
import Home from './Home'
import { browserHistory} from 'react-router'
import 'whatwg-fetch'
import Footer from './Footer'
import DropzoneComponent from 'react-dropzone-component/lib/react-dropzone';
import {host} from './host'
import firebase from 'firebase'
import firebaseConfig from './firebase'
import Sidemenu from './Sidemenu'
class EditProfile extends React.Component{

      constructor(props){
            super(props)
            this.state ={
              name: "",
              surname: "",
              cover_photo : "",
              cover : null,
              type_file : "",
              tel: "",
              email: "",
              nation:""
            }
            this.setName = this.setName.bind(this)
            this.setSurname = this.setSurname.bind(this)
            this.setEmail = this.setEmail.bind(this)
            this.setTel = this.setTel.bind(this)
            this.setNation = this.setNation.bind(this)
            this.update = this.update.bind(this)
            this.fetchData = this.fetchData.bind(this)
          }



          componentDidMount(){
            if (localStorage.getItem("username") == null || localStorage.getItem("token") == null) {
                browserHistory.replace("/login")
            }else{
                
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
                        name: value.first_name,
                        surname: value.last_name,
                        cover_photo : value.cover_photo == null ? "": value.cover_photo,
                        cover : null,
                        type_file : "",
                        tel: value.tel_no == null ? "" :value.tel_no ,
                        email: value.email == null ? "" : value.email,
                        nation:value.nationality == null ? "":value.nationality
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
                      name: value.first_name,
                      surname: value.last_name,
                      cover_photo : value.cover_photo == null ? "": value.cover_photo,
                      cover : null,
                      type_file : "",
                      tel: value.tel_no == null ? "" :value.tel_no ,
                      email: value.email == null ? "" : value.email,
                      nation:value.nationality == null ? "":value.nationality
                    })
                })
            })
          }



          setName(e){
            e.preventDefault();
            this.setState({
              name : e.target.value
            })
          }
          setSurname(e){
            e.preventDefault()
            this.setState({
              surname : e.target.value
            })
          }

          setEmail(e){
            e.preventDefault()
            this.setState({
              email:e.target.value
            })
          }
          setTel(e){
            e.preventDefault()
            this.setState({
              tel : e.target.value
            })
          }
          setNation(e){
            e.preventDefault()
            this.setState({
              nation: e.target.value
            })
          }

          update(e){
            e.preventDefault()
            console.log(this.state)
            var img = localStorage.getItem("username")+"_cover."+this.state.type_file
            firebaseConfig.storage().ref('profile_cover/'+img).put(this.state.cover).then((snapshot)=>{
              return firebaseConfig.storage().ref('profile_cover'+'/'+img).getDownloadURL()
            }).then((url)=>{
                this.setState({
                  cover_photo : url
                })
                return fetch(host+'api/profile' , {
                  method: 'PUT',
                   headers: {
                      'Content-Type': 'application/json',
                      'Accept': 'application/json',
                      'Authorization': 'Bearer '+localStorage.getItem('token')
                   },
                     body: JSON.stringify({
                        name :this.state.name ,
                        surname : this.state.surname,
                        cover : this.state.cover_photo,
                        email: this.state.email ,
                        nation : this.state.nation ,
                        tel : this.state.tel ,
                        username : localStorage.getItem("username")
                  })
                })
            }).then((res)=>{
              return res.json()
            }).then((res)=>{
               this.fetchData();
            }).catch((err)=>{
              console.log(err);
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
        <section className="margintop">
           <div className="col-sm-3 well slidemenu">
            <Sidemenu />
            </div>
        <div className="b createac" >
          <div className="col-sm-8 well">
          <div className="portlet ">
            <div className="portlet-title">
                <center>
                   <img className="img-circle img-responsive img-hovers" src={this.state.cover_photo == ""? '/img/cover/incognito.png': this.state.cover_photo} style={{padding: 10,marginBottom: 50,height: 140 , width : 140  }}/>
                  <div className="caption font-kademy">
                    <h3>Your profile</h3>
                  </div>
                </center>
              </div>
              <div className="portlet-body">
              <form className="form-horizontal">
              <div className="form-group">
                <p className="control-label col-sm-2 actopic">Cover Photo</p>
                <div className="col-sm-9">
                <DropzoneComponent style={{width: 100 , height : 25}} config={componentConfig}
                    eventHandlers={eventHandlers}
                    djsConfig={djsConfig} />
                  </div>
              </div>
                    <div className="form-group">
                      <p className="control-label col-sm-2 actopic">First name </p>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" onChange={this.setName} value={this.state.name} placeholder="First Name" />
                      </div>
                    </div>
                    <div className="form-group">
                      <p className="control-label col-sm-2 actopic">Last name </p>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" onChange={this.setSurname} value={this.state.surname} placeholder="Last Name" />
                      </div>
                    </div>
                    <div className="form-group">
                      <p className="control-label col-sm-2 actopic">Email </p>
                      <div className="col-sm-9">
                        <input type="tel" className="form-control" onChange={this.setEmail} value={this.state.email} placeholder="Email" />
                      </div>
                    </div>
                    <div className="form-group">
                      <p className="control-label col-sm-2 actopic">Telephone </p>
                      <div className="col-sm-9">
                        <input type="tel" className="form-control" onChange={this.setTel} value={this.state.tel} placeholder="Telephone No." />
                      </div>
                    </div>
                    <div className="form-group">
                      <p className="control-label col-sm-2 actopic">Nationality </p>
                      <div className="col-sm-9">
                        <input type="tel" className="form-control" onChange={this.setNation} value={this.state.nation} placeholder="Your Nationality" />
                      </div>
                    </div>
                    <div className="form-group">
                       <div className="col-sm-2"/>    
                       <div className="col-sm-2"/>
                      <div className="col-sm-4">
                        <button type="button" className="btn btn-block buttonCustomPrimary" onClick={this.update}>Update Profile</button>
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
