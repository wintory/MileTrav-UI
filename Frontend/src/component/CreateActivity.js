import React from 'react'
import Loading from 'react-loading'
import {host} from './host'
import 'whatwg-fetch';
import Home from './Home'
import Footer from './Footer'
import DropzoneComponent from 'react-dropzone-component/lib/react-dropzone';
import firebase from 'firebase'
import {Link} from 'react-router'
import {browserHistory} from 'react-router';
class CreateActivity extends React.Component {

              constructor(props){
                super(props);
                this.state = {
                  name : "",
                  desc : "",
                  cover : null ,
                  province : "Bangkok",
                  location : "",
                  type : "Appearance or Signing",
                  cover_url : "" ,
                  type_file : "",
                  ticket_name : "",
                  ticket_price : "",
                  tickets : [],
                  hour: "01",
                  minute: "00",
                  routine_desc: "",
                  itinerary : [],
                  onLoad : false
                }
                this.create = this.create.bind(this);
                this.setCity = this.setCity.bind(this);
                this.setLocation = this.setLocation.bind(this);
                this.setName = this.setName.bind(this);
                this.setDesc = this.setDesc.bind(this);
                this.setType = this.setType.bind(this);
                this.setTicketName =   this.setTicketName.bind(this);
                this.setTicketPrice = this.setTicketPrice.bind(this);
                this.addTicket = this.addTicket.bind(this)
              }

              componentDidMount(){
                if (localStorage.getItem("username") == null || localStorage.getItem("token") == null) {
                    browserHistory.replace(alert("please login"))
                }else{
                  var config = {
                      apiKey: "AIzaSyDu0FY6mCxbAek2ZWq-z8WcQvnR0IZJO4Q",
                      authDomain: "miletrav-4f855.firebaseapp.com",
                      databaseURL: "https://miletrav-4f855.firebaseio.com",
                      storageBucket: "miletrav-4f855.appspot.com",
                      messagingSenderId: "469316737513"
                    };
                  firebase.initializeApp(config);
                }

              }

              create(e){
                  e.preventDefault();
                  var img = this.state.name+"_activity_cover."+this.state.type_file
                  this.setState({
                    onLoad : true
                  })
                  var insertId;
                  console.log("authen : "+localStorage.getItem('token'))
                fetch(host+'api/activities' , {
                        method: 'POST',
                         headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                            'Authorization': 'Bearer '+localStorage.getItem('token')
                         },
                           body: JSON.stringify({
                             name : this.state.name ,
                             desc : this.state.desc ,
                             province : this.state.province,
                             location : this.state.location,
                             type : this.state.type,
                             owner: localStorage.getItem('username')
                        })
                    }).then((res) => {
                      return res.json()
                    }).then((res) => {
                        console.log(res)
                        insertId = res.insertId;
                        return firebase.storage().ref('activity_cover/'+img).put(this.state.cover)
                    }).then((snapshot)=>{
                        return firebase.storage().ref('activity_cover'+'/'+img).getDownloadURL()
                    }).then((url)=>{
                      this.setState({
                        cover_url : url
                      })
                      fetch(host+'api/activities/cover' , {
                            method: 'POST',
                             headers: {
                                'Content-Type': 'application/json',
                                'Accept': 'application/json',
                                'Authorization': 'Bearer '+localStorage.getItem('token')
                             },
                               body: JSON.stringify({
                                 id : insertId ,
                                 url : this.state.cover_url
                            })
                          }).then((res) => {
                            return res.json()
                          }).then((res)=>{
                            console.log(insertId);
                              return fetch(host+'api/ticket' , {
                                method: 'POST',
                                 headers: {
                                    'Content-Type': 'application/json',
                                    'Accept': 'application/json',
                                    'Authorization': 'Bearer '+localStorage.getItem('token')
                                 },
                                   body: JSON.stringify({
                                     aid : insertId ,
                                     tickets : this.state.tickets
                                })
                              }).then((res)=>{
                                return res.json()
                              }).then((res)=>{
                                console.log(res)
                                return fetch(host+'api/schedule', {
                                  method: 'POST',
                                   headers: {
                                      'Content-Type': 'application/json',
                                      'Accept': 'application/json',
                                      'Authorization': 'Bearer '+localStorage.getItem('token')
                                   },
                                     body: JSON.stringify({
                                       aid : insertId ,
                                       itinerary : this.state.itinerary
                                  })
                                }).then((res)=>{
                                  return res.json()
                                }).then((res)=>{
                                  console.log(res)
                                  this.setState({
                                    onLoad : false
                                  })
                                  browserHistory.push('/activity/'+this.state.name);
                                })
                              })

                          })
                    })

                    /*fetch(host+'me' , {
                          method: 'POST',
                           headers: {
                              'Content-Type': 'application/json',
                              'Accept': 'application/json',
                              'Authorization': 'Bearer '+localStorage.getItem('token')
                           } ,
                           body: JSON.stringify({
                             name : "Hello"

                        })
                      }).then((res) =>{
                        return res.json()
                      }).then((res) =>{
                        console.log(res)
                      }).catch((err)=>{
                        console.log(err);
                      })*/



                  /*var urls = 'activity_cover/'+img;
                  console.log(urls)
                  firebase.storage().ref('activity_cover'+'/'+'wu_activity_cover.png'+'').getDownloadURL().then((url) => {
                    console.log('non object' + url)
                  }).catch((err) => {
                    console.log(err);
                  } )
*/
              }

              deleteTicket(index){
                const a = this.state.tickets;
                  a.splice(index , 1)
                  this.setState({
                    listItem:  a
                  })
              }


              deleteSchedule(index){
                const a = this.state.itinerary;
                  a.splice(index , 1)
                  this.setState({
                    itinerary:  a
                  })
              }
              setTicketName(e){
                e.preventDefault();
                this.setState({
                  ticket_name : e.target.value
                })
              }
              setTicketPrice(e){
                e.preventDefault();
                this.setState({
                  ticket_price : e.target.value
                })
              }
              addTicket(e){
                e.preventDefault();
                var tick = {
                  "name": this.state.ticket_name ,
                  "price" : this.state.ticket_price
                }
                console.log(tick)
                var k = this.state.tickets;
                k.push(tick);
                this.setState({
                  tickets: k,
                  ticket_name: "",
                  ticket_price: ""
                })
                console.log(this.state.tickets)
              }

              setCity(e){
                e.preventDefault();
                this.setState({
                  province : e.target.value
                })
              }
              setLocation(e){
                e.preventDefault();
                this.setState({
                  location : e.target.value
                })
              }

              setName(e){
                e.preventDefault();
                this.setState({
                  name : e.target.value
                })
              }
              setDesc(e){
                e.preventDefault()
                this.setState({
                  desc : e.target.value
                })
              }
              setType(e){
                e.preventDefault()
                this.setState({
                    type : e.target.value
                })
              }
              setMinute(e){
                e.preventDefault();
                this.setState({
                  minute : e.target.value
                })
              }

              setHour(e){
                e.preventDefault();
                this.setState({
                  hour: e.target.value
                })
              }
              addSchedule(e){
                e.preventDefault()
                var r = {
                  "time" : this.state.hour+"."+this.state.minute,
                  "desc" : this.state.routine_desc
                }
                var i = this.state.itinerary
                i.push(r)
                this.setState({
                  itinerary : i
                })
                console.log(this.state.itinerary)
              }


              setRoutine(e){
                e.preventDefault()
                this.setState({
                  routine_desc: e.target.value
                })
              }

  render(){
    var componentConfig = {
    iconFiletypes: ['.jpg', '.png'],
    showFiletypeIcon: true,
    postUrl: 'no-url'
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

  const city = ['Bangkok' ,'Chiangmai' , 'Phuket', 'Krabi', 'Chaingrai' ,'Chonburi', 'Ayutthaya' , 'Karnchanaburi' ]
  const cate = ['Appearance or Signing' , 'Attraction' , 'Camp, Trip, or Retreat' , 'Class, Training, or Workshop' , 'Game or Competition' , 'Rally' , 'Party or Social Gathering' , 'Other']
  const hour = [ '01', '02' , '03' , '04' , '05' ,'06' , '07' ,'08' ,'09' ,'10' ,'11','12','13','14','15', '16', '17' ,'18'
   ,'19' ,'20' , '21' ,'22' ,'23' ,'00']
   const minute = ['00' , '15' ,'30' ,'45'];




   if(this.state.onLoad){
     return(
       <div className="main-wrapper b">
           <Home />
           <section className="mainContentSection singlePackage b">
              <center>
                    <div className="container" style={{marginTop : 300 , marginBottom: 300}}>
                          <Loading type='bars' color="#26A65B" style={{width: 200 , height: 100}}/>
                    </div>
              </center>
           </section>
           <Footer />
      </div>
     )

   }else{
     return(
       <div className="main-wrapper b">
           <Home />
           <section className="mainContentSection singlePackage b">
           <br/><br/>
               <div className="container" style={{width: 1024}}>
                     <div className="col-sm-12 col-xs-12">
                         <div className="portlet light">
                           <div className="portlet-title">
                               <center>
                                 <div className="caption font-kademy">
                                   <h3>Create Your Activity</h3>
                                 </div>
                               </center>
                             </div>
                             <div className="portlet-body">
                               <div className="row">
                               <br/>
                               <br/>
                                 <center>
                                 <br/>
                                 <br/>
                                 <br/>
                                     <div className="col-md-12">
                                     <form className="form-horizontal">
                                             <h3>Activity Detail</h3>
                                             <div className="form-group">
                                               <label className="control-label col-sm-2">Activity name:</label>
                                               <div className="col-sm-10">
                                                 <input type="text" className="form-control" onChange={this.setName} placeholder="Activity name" />
                                               </div>
                                             </div>

                                             <div className="form-group">
                                               <label className="control-label col-sm-2">Activity Description:</label>
                                               <div className="col-sm-10">
                                                 <textarea className="form-control" onChange={this.setDesc} placeholder="description here" />
                                               </div>
                                             </div>
                                             <div className="form-group">
                                               <label className="control-label col-sm-2">Cover image here</label>
                                               <div className="col-sm-10">
                                                                       <DropzoneComponent config={componentConfig}
                                                                           eventHandlers={eventHandlers}
                                                                           djsConfig={djsConfig} />
                                               </div>
                                             </div>
                                             <div className="form-group">
                                               <label className="control-label col-sm-2">Province</label>
                                               <div className="col-sm-10">
                                               <select onChange={this.setCity} className="form-control">
                                                 {
                                                   city.map((value , index) => {
                                                     return(
                                                         <option key={index} value={value}>{value}</option>
                                                     )
                                                   })
                                                 }
                                               </select>
                                               </div>
                                             </div>
                                             <div className="form-group">
                                               <label className="control-label col-sm-2">Location :</label>
                                               <div className="col-sm-10">
                                                 <input type="text" className="form-control" onChange={this.setLocation} placeholder="location here"/>
                                               </div>
                                             </div>
                                             <div className="form-group">
                                               <label className="control-label col-sm-2">Category :</label>
                                               <div className="col-sm-10">
                                               <select onChange={this.setType} className="form-control">
                                               {
                                                 cate.map((value , index) => {
                                                   return(
                                                       <option key={index} value={value}>{value}</option>
                                                   )
                                                 })
                                               }
                                               </select>
                                               </div>
                                             </div>
                                             <h3>Ticket</h3>
                                               <div className="form-group">
                                               <div className="row">
                                                 <div className="col-md-12">
                                                     <table className="table">
                                                       <thead>
                                                         <tr>
                                                         <td>Ticket Name</td>
                                                         <td>Price</td>
                                                         <td>Action</td>
                                                         </tr>
                                                       </thead>
                                                       <tbody>
                                                       <tr>
                                                         <td>
                                                           <input type="text" className="form-control"
                                                           onChange={this.setTicketName} value={this.state.ticket_name} placeholder="Earlybird , RSVP , ..."/>
                                                         </td>
                                                         <td>
                                                           <input type="number" className="form-control"
                                                           onChange={this.setTicketPrice} value={this.state.ticket_price}  placeholder="150.00 THB"/>
                                                         </td>
                                                         <td>
                                                         <button type="button" className="btn btn-block buttonCustomPrimary"
                                                         onClick={this.addTicket}>Add</button>
                                                         </td>
                                                       </tr>
                                                       {
                                                         this.state.tickets.map((value , key) =>{
                                                           return(
                                                             <tr key={key}>
                                                             <td>{value.name} </td>
                                                             <td>{value.price}</td>
                                                             <td>
                                                             <button type="button" onClick={this.deleteTicket.bind(this, key)} className="btn btn-block buttonCustomPrimary">x</button>
                                                             </td>
                                                               </tr>
                                                           )
                                                         })
                                                       }

                                                       </tbody>
                                                     </table>
                                                   </div>
                                                 </div>
                                             </div>
                                             <h3>Schedule</h3>

                                             <div className="form-group">
                                             <div className="row">
                                               <div className="col-md-12">
                                                   <table className="table">
                                                     <thead>
                                                       <tr>
                                                       <td>Hour</td>
                                                       <td>Minute</td>
                                                       <td>Activity</td>
                                                       <td>Action</td>
                                                       </tr>
                                                     </thead>
                                                     <tbody>
                                                     <tr>
                                                       <td>
                                                       <select onChange={this.setHour.bind(this)} className="form-control">
                                                       {
                                                         hour.map((value , index) =>{
                                                           return(
                                                             <option key={index} value={value}>{value}</option>
                                                           )
                                                         })
                                                       }
                                                       </select>
                                                       </td>
                                                       <td>
                                                       <select onChange={this.setMinute.bind(this)} className="form-control">
                                                       {
                                                         minute.map((value , index) =>{
                                                           return(
                                                             <option key={index} value={value}>{value}</option>
                                                           )
                                                         })
                                                       }
                                                       </select>
                                                       </td>
                                                       <td>
                                                       <input type="text" className="form-control"
                                                       onChange={this.setRoutine.bind(this)} value={this.state.routine_desc} placeholder="Meet up at ..... , Finished activity"/>
                                                       </td>
                                                       <td>
                                                       <button type="button" className="btn btn-block buttonCustomPrimary"
                                                       onClick={this.addSchedule.bind(this)}>Add</button>
                                                       </td>
                                                     </tr>

                                                     {
                                                       this.state.itinerary.map((value , key) =>{
                                                         return(
                                                           <tr key={key}>
                                                             <td colSpan="2">{value.time} </td>
                                                             <td>{value.desc} </td>
                                                             <td><button type="button" onClick={this.deleteSchedule.bind(this, key)} className="btn btn-block buttonCustomPrimary">x</button></td>
                                                           </tr>
                                                         )
                                                       })
                                                     }
                                                     </tbody>
                                                   </table>


                                                 </div>
                                               </div>
                                           </div>

                                             <div className="form-group">
                                               <div className="col-sm-offset-2 col-sm-2">
                                                 <button type="button" className="btn btn-block buttonCustomPrimary" onClick={this.create}>Create Activity</button>
                                               </div>
                                             </div>
                                           </form>
                                     </div>
                                 </center>
                               </div>
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
}
export default CreateActivity;
