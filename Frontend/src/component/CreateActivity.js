import React from 'react'
import Loading from 'react-loading'
import { host } from './host'
import 'whatwg-fetch';
import Home from './Home'
import Footer from './Footer'
import DropzoneComponent from 'react-dropzone-component/lib/react-dropzone';
import firebaseConfig from './firebase'
import { Link } from 'react-router'
import { browserHistory } from 'react-router';
class CreateActivity extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      desc: "",
      cover: null,
      province: "Bangkok",
      location: "",
      type: "Appearance or Signing",
      cover_url: "",
      type_file: "",
      ticket_name: "",
      ticket_price: "",
      ticket_amount: '',
      tickets: [],
      hour: "01",
      minute: "00",
      routine_desc: "",
      itinerary: [],
      onLoad: false,
      Maxprice: 0,
      operating_day: [],
    }
    this.create = this.create.bind(this);
    this.setCity = this.setCity.bind(this);
    this.setLocation = this.setLocation.bind(this);
    this.setName = this.setName.bind(this);
    this.setDesc = this.setDesc.bind(this);
    this.setType = this.setType.bind(this);
    this.setTicketName = this.setTicketName.bind(this);
    this.setTicketPrice = this.setTicketPrice.bind(this);
    this.addTicket = this.addTicket.bind(this)
    this.setTicketAmount = this.setTicketAmount.bind(this)
  }

  componentDidMount() {
    if (localStorage.getItem("username") == null || localStorage.getItem("token") == null) {
      browserHistory.replace("/login")
    }
  }

  create(e) {
    if (this.state.name == '' || this.state.desc == '' || this.state.location == '' || this.state.tickets.length == 0 || this.state.itinerary.length == 0 || this.state.operating_day.length == 0) {
      alert("Please complete the form below")

    } else {
      e.preventDefault();
      var img = this.state.name + "_activity_cover." + this.state.type_file
      this.setState({
        onLoad: true
      })
      var insertId;
      console.log("authen : " + localStorage.getItem('token'))
      fetch(host + 'api/activities', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify({
          name: this.state.name,
          desc: this.state.desc,
          province: this.state.province,
          location: this.state.location,
          type: this.state.type,
          owner: localStorage.getItem('username'),
          price: this.state.Maxprice
        })
      }).then((res) => {
        return res.json()
      }).then((res) => {
        console.log(res)
        insertId = res.insertId;
        return firebaseConfig.storage().ref('activity_cover/' + img).put(this.state.cover)
      }).then((snapshot) => {
        return firebaseConfig.storage().ref('activity_cover' + '/' + img).getDownloadURL()
      }).then((url) => {
        this.setState({
          cover_url: url
        })
        fetch(host + 'api/activities/cover', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          },
          body: JSON.stringify({
            id: insertId,
            url: this.state.cover_url
          })
        }).then((res) => {
          return res.json()
        }).then((res) => {
          console.log(insertId);
          return fetch(host + 'api/ticket', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify({
              aid: insertId,
              tickets: this.state.tickets
            })
          }).then((res) => {
            return res.json()
          }).then((res) => {
            console.log(res)
            return fetch(host + 'api/schedule', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
              },
              body: JSON.stringify({
                aid: insertId,
                itinerary: this.state.itinerary
              })
            }).then((res) => {
              return res.json()
            }).then((res) => {
              console.log(res)
              return fetch(host + 'api/operating_day', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
                  'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                body: JSON.stringify({
                  aid: insertId,
                  operating: this.state.operating_day
                })
              })

            }).then((res) => {
              return res.json()
            }).then((res) => {
              this.setState({
                onLoad: false
              })
              browserHistory.push('/UploadPhotoActivity/' + this.state.name);
            })
          })

        })
      })

    }
  }

  deleteTicket(index) {
    const a = this.state.tickets;
    a.splice(index, 1)
    this.setState({
      listItem: a
    })
  }


  deleteSchedule(index) {
    const a = this.state.itinerary;
    a.splice(index, 1)
    this.setState({
      itinerary: a
    })
  }
  setTicketName(e) {
    e.preventDefault();
    this.setState({
      ticket_name: e.target.value
    })
  }
  setTicketPrice(e) {
    e.preventDefault();
    this.setState({
      ticket_price: e.target.value
    })

    if (this.state.Maxprice < e.target.value) {
      this.setState({
        Maxprice: e.target.value
      })
    }
  }

  setTicketAmount(e) {
    e.preventDefault();
    this.setState({
      ticket_amount: e.target.value
    })
  }
  addTicket(e) {
    if(this.state.ticket_name==''||this.state.ticket_price==''||this.state.ticket_amount==''){
      alert("please complete input ticket")
    }else{
    e.preventDefault();
    var tick = {
      "name": this.state.ticket_name,
      "price": this.state.ticket_price,
      "amount": this.state.ticket_amount
    }
    console.log(tick)
    var k = this.state.tickets;
    k.push(tick);
    this.setState({
      tickets: k,
      ticket_name: "",
      ticket_price: "",
      ticket_amount: ""
    })
    console.log(this.state.tickets)
    }
  }

  setCity(e) {
    e.preventDefault();
    this.setState({
      province: e.target.value
    })
  }
  setLocation(e) {
    e.preventDefault();
    this.setState({
      location: e.target.value
    })
  }

  setName(e) {
    e.preventDefault();
    this.setState({
      name: e.target.value
    })
  }
  setDesc(e) {
    e.preventDefault()
    this.setState({
      desc: e.target.value
    })
  }
  setType(e) {
    e.preventDefault()
    this.setState({
      type: e.target.value
    })
  }
  setMinute(e) {
    e.preventDefault();
    this.setState({
      minute: e.target.value
    })
  }

  setHour(e) {
    e.preventDefault();
    this.setState({
      hour: e.target.value
    })
  }
  addSchedule(e) {
    if(this.state.hour==''||this.state.minute==''||this.state.routine_desc==''){
      alert("please complete input schedule")
    }else{
    e.preventDefault()
    var r = {
      "time": this.state.hour + "." + this.state.minute,
      "desc": this.state.routine_desc
    }
    var i = this.state.itinerary
    i.push(r)
    this.setState({
      itinerary: i
    })
    this.setState({
       hour: "01",
      minute: "00",
      routine_desc: ""
    })
    console.log(this.state.itinerary)
    }
  }


  setRoutine(e) {
    e.preventDefault()
    this.setState({
      routine_desc: e.target.value
    })
  }


  checkDay(value) {
    var k = this.state.operating_day
    console.log("len " + k.length)
    var index = k.indexOf(value)
    console.log(index)
    if (k.length == 0) {
      k.push(value)
      console.log("add first time" + value)
      console.log(k)
    } else {
      if (index > -1) {
        k.splice(index, 1)
        console.log("delete " + value)
        console.log(k)
      } else {
        k.push(value)
        console.log("add " + value)
        console.log(k)
      }
    }
    this.setState({
      operating_day: k
    })
  }




  render() {
    var componentConfig = {
      iconFiletypes: ['.jpg', '.png'],
      showFiletypeIcon: true,
      postUrl: 'no-url'
    };
    var djsConfig = {
      autoProcessQueue: false, addRemoveLinks: true, uploadMultiple: false, maxFiles: 1
    }
    var eventHandlers = {
      addedfile: (file) => {
        var type = file.name.split('.');
        console.log(type[1])
        this.setState({
          cover: file,
          type_file: type[1]
        })

      }
    }

    const city = ['Bangkok', 'Chiangmai', 'Phuket', 'Krabi', 'Chaingrai', 'Chonburi', 'Ayutthaya', 'Karnchanaburi']
    const cate = ['Arts', 'Appearance or Signing', 'Attraction', 'Camp, Trip, or Retreat', 'Concert or Shows', 'Class, Training, or Workshop', 'Game or Competition', 'Rally', 'Party or Social Gathering', 'Other']
    const hour = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18'
      , '19', '20', '21', '22', '23', '00']
    const minute = ['00', '15', '30', '45'];
    const day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];





    if (this.state.onLoad) {
      return (
        <div className="main-wrapper b">
          <Home />
          <section className="margintop">
            <div className="container b createac">
                <div className="col-sm-12 col-xs-12 well">
                <div className="portlet ">
                  <div className="portlet-title">
              <div align="center" className=" loading">
                <Loading type='bars' color="#26A65B" style={{ width: 200, height: 100 }} />
              </div>
            </div>
            </div>
            </div>
            </div>
          </section>
          <Footer />
        </div>
      )

    } else {
      return (
        <div className="main-wrapper b">
          <Home />
          <section className="margintop">
            <div className="container b createac">
              <div className="col-sm-12 col-xs-12 well">
                <div className="portlet ">
                  <div className="portlet-title">
                    <center>
                      <div className="caption font-kademy">
                        <br />
                        <h3>Create Your Activity</h3>
                      </div>
                    </center>
                  </div>
                  <div className="portlet-body">
                    <div className="row">
                      <br />
                      <br />
                      <center>
                        <div className="col-md-12">
                          <form className="form-horizontal">
                            <div className="form-group">
                              <p className="control-label col-sm-2 actopic">Activity name </p>
                              <div className="col-sm-9">
                                <input type="text" className="form-control" onChange={this.setName} placeholder="Activity name" required="required" />
                              </div>
                            </div>

                            <div className="form-group">
                              <p className="control-label col-sm-2 actopic">Activity Description </p>
                              <div className="col-sm-9">
                                <textarea className="form-control" onChange={this.setDesc} placeholder="description here" />
                              </div>
                            </div>
                            <div className="form-group">
                              <p className="control-label col-sm-2 actopic">Cover image Here</p>
                              <div className="col-sm-9">
                                <DropzoneComponent config={componentConfig}
                                  eventHandlers={eventHandlers}
                                  djsConfig={djsConfig} />
                              </div>
                            </div>
                            <div className="form-group">
                              <p className="control-label col-sm-2 actopic">Province </p>
                              <div className="col-sm-9">
                                <select onChange={this.setCity} className="form-control">
                                  {
                                    city.map((value, index) => {
                                      return (
                                        <option key={index} value={value}>{value}</option>
                                      )
                                    })
                                  }
                                </select>
                              </div>
                            </div>
                            <div className="form-group">
                              <p className="control-label col-sm-2 actopic">Location </p>
                              <div className="col-sm-9">
                                <input type="text" className="form-control" onChange={this.setLocation} placeholder="location here" required="required" />
                              </div>
                            </div>
                            <div className="form-group">
                              <p className="control-label col-sm-2 actopic">Category </p>
                              <div className="col-sm-9">
                                <select onChange={this.setType} className="form-control">
                                  {
                                    cate.map((value, index) => {
                                      return (
                                        <option key={index} value={value}>{value}</option>
                                      )
                                    })
                                  }
                                </select>
                              </div>
                            </div>
                            <br />
                            <h3>Ticket</h3>
                            <div className="form-group">
                              <div className="row">
                                <div className="col-md-12">
                                  <table className="table">
                                    <thead>
                                      <tr>
                                        <td><p className=" topic">Ticket Name</p></td>
                                        <td><p className=" topic">Price</p></td>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>
                                          <input type="text" className="form-control"
                                            onChange={this.setTicketName} value={this.state.ticket_name} placeholder="Earlybird , RSVP , ..." required="required" />
                                        </td>
                                        <td>
                                          <input type="number" className="form-control"
                                            onChange={this.setTicketPrice} value={this.state.ticket_price} placeholder="150.00 THB" required="required" />
                                        </td>
                                        <td>
                                          <input type="number" className="form-control"
                                            onChange={this.setTicketAmount} value={this.state.ticket_amount} min={1} placeholder="10 tickets" required="required" />
                                        </td>
                                        <td>
                                          <button type="button" className="btn btn-block buttonCustomPrimary"
                                            onClick={this.addTicket}>Add</button>
                                        </td>
                                      </tr>
                                     
                                      {
                                        this.state.tickets.map((value, key) => {
                                          return (
                                            <tr key={key}>
                                              <td><p className="black">{value.name}</p> </td>
                                              <td><p className="black">{value.price}</p></td>
                                              <td><p className="black">{value.amount}</p></td>
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
                                        <td><p className=" topic">Hour</p></td>
                                        <td><p className=" topic">Minute</p></td>
                                        <td><p className=" topic">Activity</p></td>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>
                                          <select onChange={this.setHour.bind(this)} className="form-control">
                                            {
                                              hour.map((value, index) => {
                                                return (
                                                  <option key={index} value={value}>{value}</option>
                                                )
                                              })
                                            }
                                          </select>
                                        </td>
                                        <td>
                                          <select onChange={this.setMinute.bind(this)} className="form-control">
                                            {
                                              minute.map((value, index) => {
                                                return (
                                                  <option key={index} value={value}>{value}</option>
                                                )
                                              })
                                            }
                                          </select>
                                        </td>
                                        <td>
                                          <input type="text" className="form-control"
                                            onChange={this.setRoutine.bind(this)} value={this.state.routine_desc} placeholder="Meet up at ..... , Finished activity" required="required" />
                                        </td>
                                        <td>
                                          <button type="button" className="btn btn-block buttonCustomPrimary"
                                            onClick={this.addSchedule.bind(this)}>Add</button>
                                        </td>
                                      </tr>
                              

                                      {
                                        this.state.itinerary.map((value, key) => {
                                          return (
                                            <tr key={key}>
                                              <td colSpan="2"><p className="black">{value.time}</p> </td>
                                              <td><p className="black">{value.desc} </p></td>
                                              <td><button type="button" onClick={this.deleteSchedule.bind(this, key)} className="btn btn-block buttonCustomPrimary">x</button></td>
                                            </tr>
                                          )
                                        })
                                      }
                                    </tbody>
                                  </table>
                                  <div className="form-group">
                                    <div className="row">
                                      <div className="col-md-12">
                                        <h3>Operating Day</h3>
                                        {
                                          day.map((value, key) => {
                                            return (
                                              <div className="col-md-3" key={key}>
                                                <div className="input-group">
                                                  <span className="input-group-addon">
                                                    <input type="checkbox" onChange={this.checkDay.bind(this, value)} />
                                                  </span>
                                                  <input type="text" className="form-control" value={value} disabled />
                                                </div>
                                              </div>
                                            )
                                          })

                                        }

                                      </div>
                                    </div>
                                  </div>

                                </div>
                              </div>
                            </div>
                            <div className="col-sm-3" />
                            <div className="col-sm-1" />
                            <div className="form-group">
                              <div className="col-sm-4">
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
