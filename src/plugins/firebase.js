// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import Vue from 'vue'
import * as firebase from 'firebase/app'
import firebaseConfig from '../../firebaseConfig'

// Add the Firebase services that you want to use
// import 'firebase/auth'
import 'firebase/firestore'

// TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyBeW3jgoiQ11QC25NAZttJaOqYfW-4GTAc',
//   authDomain: 'vuefirebase-638e5.firebaseapp.com',
//   databaseURL: 'https://vuefirebase-638e5.firebaseio.com',
//   projectId: 'vuefirebase-638e5',
//   storageBucket: 'vuefirebase-638e5.appspot.com',
//   messagingSenderId: '543945145112',
//   appId: '1:543945145112:web:78f06b7f059d38250e3c6d',
//   measurementId: 'G-5XGCYLECW4'
// }

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// firebase.firestore().collection('test').add({ test: 'aaa' })
//   .then(r => console.log(r))
//   .catch(e => console.error(e))

Vue.prototype.$firebase = firebase
