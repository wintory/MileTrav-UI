import React from 'react'
import { host } from './host'
import 'whatwg-fetch'
import Loading from 'react-loading'
import Home from './Home'
import Footer from './Footer'
import DropzoneComponent from 'react-dropzone-component/lib/react-dropzone';
import firebase from 'firebase'
import { Link } from 'react-router'
import { browserHistory } from 'react-router';
import firebaseConfig from './firebase'

class UploadPhotoActivity extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: this.props.params.activity_name,
            photo: [],
            aid: 0,
            onLoad: false
        }
        this.create = this.create.bind(this)
    }
    componentDidMount() {
        if (localStorage.getItem("username") == null || localStorage.getItem("token") == null) {
            browserHistory.replace("/login")
        } else {

            fetch(host + 'api/activities/detail/' + this.state.name, { method: 'GET' })
                .then((res) => {
                    return res.json()
                }).then((res) => {
                    console.log(res)
                    if (res == [] || res == null) {
                        browserHistory.push("/")
                    } else {
                        this.setState({
                            aid: res[0].activity_id
                        })
                    }
                })
        }
    }

    create(e) {
        e.preventDefault()
        this.setState({
            onLoad: true
        })
        var round = this.state.photo.length;
        console.log(round)
        this.state.photo.map((file, index) => {
            console.log(index)
            firebaseConfig.storage().ref('example_photo/' + this.state.name + '_example_photo_' + file.lastModified + '_' + index + file.name.split('.'))
                .put(file)
                .then((snapshot) => {
                    return firebaseConfig.storage().ref('example_photo/' + this.state.name + '_example_photo_' + file.lastModified + '_' + index + file.name.split('.')).getDownloadURL()
                })
                .then((urls) => {
                    return fetch(host + 'photo', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                            'Authorization': 'Bearer ' + localStorage.getItem('token')
                        },
                        body: JSON.stringify({
                            aid: this.state.aid,
                            url: urls
                        })
                    })
                }).then((res) => {
                    return res.json()

                }).then((res) => {
                    if (index == this.state.photo.length - 1) {
                        this.setState({
                            onLoad: false
                        }, () => {
                            browserHistory.push('/activity/' + this.state.name)
                        })
                    }
                })
        })

    }

    render() {
        var componentConfig = {
            iconFiletypes: ['.jpg', '.png'],
            showFiletypeIcon: true,
            postUrl: 'no-url'
        };
        var djsConfig = {
            autoProcessQueue: false,
            addRemoveLinks: true,
            uploadMultiple: false,
            maxFiles: 10
        }

        var eventHandlers = {
            addedfile: (file) => {
                var type = file.name.split('.');
                var pho = this.state.photo
                pho.push(file);
                this.setState({
                    photo: pho
                })
            },
            removedfile: (file) => {
                var pho = this.state.photo
                for (var i = 0; i < pho.length; i++) {
                    if (pho[i] == file) {
                        pho.splice(i, 1)
                        break;
                    }
                }
                this.setState({
                    photo: pho
                })
            }
        }


        if (!this.state.onLoad) {
            return (
                <div className="main-wrapper b">
                    <Home />
                    <section className="margintop">
                        <div className="b createac" >
                            <div className="col-sm-3" />
                            <div className="col-sm-9 well">
                                <div className="portlet ">
                                    <div className="portlet-title">
                                        <center>
                                            <div className="caption font-kademy">
                                                <h3>Picture for your activity detail</h3>
                                                <p>This is optional process if you have any picture of {this.state.name}</p>
                                            </div>
                                        </center>
                                    </div>
                                    <div className="portlet-body">
                                        <form className="form-horizontal">
                                            <div className="form-group">
                                                <p className="control-label topic col-sm-4">Upload your picture          (Maximum 10 pictures)</p>
                                                <div className="col-sm-8">
                                                    <DropzoneComponent config={componentConfig}
                                                        eventHandlers={eventHandlers}
                                                        djsConfig={djsConfig} />
                                                </div>

                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-2" />
                                                <div className="col-sm-offset-2 col-sm-4">
                                                    <button type="button" className="btn btn-block buttonCustomPrimary" onClick={this.create}>Create Activity</button>
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
        } else {
            return (
                <div className="main-wrapper b">
                    <Home />
                    <section className="margintop">
                        <div className="container b createac">
                            <div className="col-sm-12 col-xs-12">
                                <div className="h2login ">
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
        }

    }




}
export default UploadPhotoActivity;