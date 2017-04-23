import React, { Component } from 'react';
import DropzoneComponent from 'react-dropzone-component/lib/react-dropzone';
import { host } from './host'
import firebaseConfig from './firebase'

class CitizenUpload extends Component {

    constructor(props) {
        super(props)
        this.state = {
            citizen: null,
            file: null,
            verify_citizen: 0
        }
        this.submitCitizen = this.submitCitizen.bind(this)
    }

    submitCitizen(e) {
        e.preventDefault();
        var f = this.state.file
        firebaseConfig.storage().ref('citizen_photo/' + localStorage.getItem("username") + '_citizen_' + f.lastModified + f.name.split('.'))
            .put(f).then((snapshot) => {
                return firebaseConfig
                    .storage()
                    .ref('citizen_photo/' + localStorage.getItem("username") + '_citizen_' + f.lastModified + f.name.split('.'))
                    .getDownloadURL()
            })
            .then((url) => {
                fetch(host + 'api/citizen', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    },
                    body: JSON.stringify({
                        username: localStorage.getItem("username"),
                        citizen: url
                    })
                }).then((res) => {
                    return res.json()
                }).then((res) => {
                    console.log(res)
                    this.setState({
                        citizen: url
                    })
                }).catch((err) => {
                    console.log(err)
                })
            })
    }
    componentDidMount() {
        fetch(host + 'api/profile/' + localStorage.getItem('username'), {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then((res) => {
                return res.json()
            }).then((res) => {
                console.log(res)
                this.setState({
                    citizen: res[0].citizen,
                    verify_citizen: res[0].verify_citizen
                })
            })
    }

    render() {
        var componentConfig = {
            iconFiletypes: ['.jpg', '.png'],
            showFiletypeIcon: true,
            postUrl: 'no-url',
        };
        var djsConfig = {
            autoProcessQueue: false, addRemoveLinks: true, uploadMultiple: false, maxFiles: 1
        }
        var addCitizen = {
            addedfile: (f) => {
                // var  type = file.name.split('.');
                this.setState({
                    file: f
                })
            }
        }
        if (this.state.citizen == null || this.state.citizen == "") {
            return (
                <div className="portlet-body">
                    <form className="form-horizontal">
                        <div className="form-group">
                            <p className="control-label col-sm-3 actopic">ID Card Photo</p>
                            <div className="col-sm-9 verify">
                                <DropzoneComponent style={{ width: 100, height: 25 }} config={componentConfig}
                                    eventHandlers={addCitizen}
                                    djsConfig={djsConfig} />
                            </div>

                            <div className="form-group">
                                <div className="col-sm-2" />
                                <div className="col-sm-2" />
                                <div className="col-sm-1" />
                                <div className="col-sm-4">
                                    <button type="button" className="btn btn-block buttonCustomPrimary" onClick={this.submitCitizen} >Verify Card</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>



            )
        } else {
            if (this.state.verify_citizen == 0) {
                return (
                    <div className="col-xs-4 col-md-4 col-lg-4 margbtm">
                   
                            <div className="caption" >
                                <h4>Citizen ID</h4>
                                <div className="detailsInfo">
                                    <div>
                                        <p className="topic">Pending...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
              
                )
            } else {
                return (
                          <div className="col-xs-4 col-md-4 col-lg-4 margbtm">
             
                            <div className="caption">
                                <h4>Citizen ID</h4>
                                <div className="detailsInfo">
                                    <div>
                                        <p className="green">Confirm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                  
                )
            }

        }

    }
}

export default CitizenUpload;