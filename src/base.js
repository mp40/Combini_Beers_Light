import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB9iiSxVGMV5IHczyn-CWlk0JTXSbQqhjk",
    authDomain: "my-appbs.firebaseapp.com",
    databaseURL: "https://my-appbs.firebaseio.com",
    projectId: "my-appbs",
    storageBucket: "my-appbs.appspot.com",
    messagingSenderId: "1002150771449"
};
const app = firebase.initializeApp(config)
const db = app.database();

export default db