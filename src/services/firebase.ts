import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';


const firebaseConfig = {

  apiKey: "AIzaSyA-zY4QW6z1l6UzUjhEmXcV9xPesuhbDDI",
  authDomain: "dashcomentario.firebaseapp.com",
  databaseURL: "https://dashcomentario-default-rtdb.firebaseio.com",
  projectId: "dashcomentario",
  storageBucket: "dashcomentario.appspot.com",
  messagingSenderId: "696105019308",
  appId: "1:696105019308:web:97d744c7edea3191533c09"
    // apiKey: process.env.REACT_APP_API_KEY,
    // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // databaseURL: process.env.REACT_APP_DATABASE_URL,
    // projectId: process.env.REACT_APP_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_APP_ID
}

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database }
