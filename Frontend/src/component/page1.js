import React , {props} from 'react'
import {Link} from 'react-router'
import Dropzone from 'react-dropzone'
import request from 'superagent';
import DropzoneComponent from 'react-dropzone-component';
class Page1 extends React.Component{


  constructor(props) {
         super(props);
         this.state = {
           name : "",
           desc : "",
           province : "Bangkok" ,
           location : "" ,
           itinerary : [] ,
           amount : 1,
           price: "",
           cover_photo: "" ,
           file : null
         };
         this.getName = this.getName.bind(this)
         this.getDesc = this.getDesc.bind(this)

         this.getProvince = this.getProvince.bind(this)
         this.getLocation= this.getLocation.bind(this)
         this.dropHandler =   this.dropHandler.bind(this)
       }

      getName(e){
        this.setState({
          name: e.target.value
        })
      }
      getDesc(e){
        this.setState({
          desc: e.target.value
        })
      }
      getProvince(e){
        this.setState({
          province: e.target.value
        })
      }
      getLocation(e){
        this.setState({
          location : e.target.value
        })
      }
      getPrice(e){
        this.setState({
          price : e.target.value
        })
      }

      dropHandler(file){
        console.log(file)
      }





  render(){

    const province = ['Bangkok' ,'Chiangmai' , 'Phuket', 'Krabi', 'Chaingrai' ,'Chonburi', 'Ayutthaya' , 'Karnchanaburi' ];
    const hour = ['06' , '07', '08' , '09' , '10' , '11' , '12' , '13' , '14' , '15' , '16','17' , '18' ,'19' , '20' ,'21' , '22' , '23']
    const minute = ['00' , '15' , '30' , '45' ];
    var componentConfig = { postUrl: 'no-url' }
    var djsConfig = { autoProcessQueue: false }
    var eventHandlers = { addedfile: (files) => {
          this.setState({
            file: files
          })
          console.log(this.state.file)
      }
  }
    return(
      <div className="container">
          <form>
              <p>Activity name :</p>
              <input onChange={this.getName} value={this.state.name} type="text" />
              <p>Activity desc :</p>
              <textarea  onChange={this.getDesc} value={this.state.desc}  rows="4" cols="50" />
              <p>Province</p>
              <select onChange={this.getProvince}>
                {
                  province.map((value , index) => {
                    return(
                      <option key={index.toString()+value} value={value} checked={this.state.province === value ? true: false}>{value}</option>
                    )
                  })
                }
              </select>
              <p>Location :</p>
              <input onChange={this.getLocation} type="text" />
              <p>Price</p>
              <input type="number"/>
              <button type="submit" onClick={this.SubmitData}>Submit</button>
              <p>img cover</p>
              <DropzoneComponent config={componentConfig}
                         eventHandlers={eventHandlers}
                         djsConfig={djsConfig} />
                         <button type="button">Submit</button>
          </form>
      </div>
    )
  }
}
export default Page1
