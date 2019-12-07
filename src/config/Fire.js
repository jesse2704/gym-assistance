import firebase from 'firebase';

  const config = {
    apiKey: "AIzaSyCWjLNS15mAT9klH3VmFO3bvEJ_-Ub5oKs",
    authDomain: "gym-assistance.firebaseapp.com",
    databaseURL: "https://gym-assistance.firebaseio.com",
    projectId: "gym-assistance",
    storageBucket: "gym-assistance.appspot.com",
    messagingSenderId: "430043807905",
    appId: "1:430043807905:web:155c593e31f0283a15b0e0",
    measurementId: "G-W10JDWGTY0"
  };
const fire = firebase.initializeApp(config);
export default fire;