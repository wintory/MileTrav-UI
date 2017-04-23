import React, { Component } from 'react';
import DropzoneComponent from 'react-dropzone-component/lib/react-dropzone';
import { host } from './host'
import firebaseConfig from './firebase'
class BankUpload extends Component {

    constructor(props) {
        super(props)
        this.state = {
            bank_acc: null,
            file: null,
            verify_bank: 0
        }
        this.submitAccount = this.submitAccount.bind(this)
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
                    bank_acc: res[0].bank_account,
                    verify_bank: res[0].verify_bank
                })
            })
    }


    submitAccount(e) {
        e.preventDefault();
        var f = this.state.file
        firebaseConfig.storage().ref('bank_account_photo/' + localStorage.getItem("username") + '_bank_account_' + f.lastModified + f.name.split('.'))
            .put(f).then((snapshot) => {
                return firebaseConfig
                    .storage()
                    .ref('bank_account_photo/' + localStorage.getItem("username") + '_bank_account_' + f.lastModified + f.name.split('.'))
                    .getDownloadURL()
            })
            .then((url) => {
                fetch(host + 'api/bank_account', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    },
                    body: JSON.stringify({
                        username: localStorage.getItem("username"),
                        bank_acc: url
                    })
                }).then((res) => {
                    return res.json()
                }).then((res) => {
                    console.log(res)

                    this.setState({
                        bank_acc: url
                    })
                }).catch((err) => {
                    console.log(err)
                })
            })

    }



    render() {

        var componentConfig = {
            iconFiletypes: ['.jpg', '.png'],
            showFiletypeIcon: true,
            postUrl: 'no-url',
        };


        var addBank = {
            addedfile: (f) => {
                // var  type = file.name.split('.');
                this.setState({
                    file: f
                })
            }
        }
        var djsConfig = {
            autoProcessQueue: false, addRemoveLinks: true, uploadMultiple: false, maxFiles: 1
        }

        if (this.state.bank_acc == null || this.state.bank_acc == "") {
            return (
                <div className="portlet-body">
                    <form className="form-horizontal">
                        <div className="form-group">
                            <p className="control-label col-sm-3 actopic">Bank Account</p>
                            <div className="col-sm-9 verify">
                                <DropzoneComponent style={{ width: 100, height: 25 }} config={componentConfig}
                                    eventHandlers={addBank}
                                    djsConfig={djsConfig} />
                            </div>

                            <div className="form-group">
                                <div className="col-sm-2" />
                                <div className="col-sm-2" />
                                <div className="col-sm-1" />
                                <div className="col-sm-4">
                                    <button type="button" className="btn btn-block buttonCustomPrimary" onClick={this.submitAccount} >Verify Bank Account</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

            );
        } else {
            if (this.state.verify_bank == 0) {
                return (
                    <div className="col-xs-4 col-md-4 col-lg-4 margbtm">
                        <div className="thumbnail deals verify">
                            <div className="caption">
                                <h4>Bank Account</h4>
                                <div className="detailsInfo">
                                    <div>
                                        <p className="topic">Pending...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className="col-xs-4 col-md-4 col-lg-4 margbtm">
                        <div className="thumbnail deals verify">
                            <div className="caption">
                                <h4>Bank Account</h4>
                                <div className="detailsInfo">
                                    <div>
                                        <p className="green">Confirm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        }




    }
}

export default BankUpload;