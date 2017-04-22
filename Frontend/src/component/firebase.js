import  * as firebase  from 'firebase'

var config = {
                  apiKey: "AIzaSyDu0FY6mCxbAek2ZWq-z8WcQvnR0IZJO4Q",
                  authDomain: "miletrav-4f855.firebaseapp.com",
                  databaseURL: "https://miletrav-4f855.firebaseio.com",
                  storageBucket: "miletrav-4f855.appspot.com",
                  messagingSenderId: "469316737513"
};
var firebaseConfig = firebase.initializeApp(config);
console.log(firebaseConfig)

export default firebaseConfig;