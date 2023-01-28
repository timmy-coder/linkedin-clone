import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyA07bUq2a2IRqtcRvSjbPiRDSRY0Sf_1Oc",
    authDomain: "linkdein-clone-618f6.firebaseapp.com",
    projectId: "linkdein-clone-618f6",
    storageBucket: "linkdein-clone-618f6.appspot.com",
    messagingSenderId: "763202057415",
    appId: "1:763202057415:web:6f718357b2c493990bbae2"
  }
  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
//   const auth = firebase.auth()

  export {db};